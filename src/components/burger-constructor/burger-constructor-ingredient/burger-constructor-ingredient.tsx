import React, {FC} from "react";
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDispatch} from "../../../services/hooks";
import burgerIngredientStyles from './burger-constructor-ingredient.module.css';
import {useDrag, useDrop} from "react-dnd";
import {MOVE_ITEMS, REMOVE_ITEM} from "../../../services/constants";
import {TItem} from "../../../types";

interface IBurgerIngredientProps {
    item: TItem;
    layout?: 'top' | 'bottom';
    index?: number;
}

const BurgerIngredient: FC<IBurgerIngredientProps> = ({item, layout, index}) => {

    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch({
            type: REMOVE_ITEM,
            payload: item,
        });
    };

    interface IBun {
        layout?: 'top' | 'bottom';
        item: TItem;
        remark: string;
    }

    const Bun:FC<IBun> = ({item, layout,remark}) => {
        const remarkType = remark === 'top' ? ' (верх)' : ' (низ)';
        return (
            <div className='mt-4 ml-8'>
                <ConstructorElement
                    type={layout}
                    text={item.name + remarkType}
                    price={item.price}
                    thumbnail={item.image}
                    isLocked={true}/>
            </div>
        );
    };

    const onDropChange = (dropIndex:number | undefined, dragIndex:number | undefined) => {
        dispatch({
            type: MOVE_ITEMS,
            dropIndex: dropIndex,
            dragIndex: dragIndex
        });
    };

    const [, drag] = useDrag({
        type: 'constructor-ingredient',
        item: (() => ({index})),
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }, [index]);


    const [{isHover}, drop] = useDrop({
        accept: 'constructor-ingredient',
        collect(monitor) {
            return {
                isHover: monitor.isOver({shallow: true}),
            };
        },
        drop(item:{index:number}) {
            const dragIndex = index;
            const dropIndex = item.index;
            if (dropIndex !== dragIndex) {
                onDropChange(dragIndex, dropIndex);
            }
        },
    }, [dispatch]);

    const transform = isHover ? 'scale(1.1)' : '';

    if (item.type === 'bun') {
        /*return (<Bun {...item} layout='top'/>);*/
        return (<Bun item ={item} remark='top' layout={layout}/>);
    } else {
        return (
            <div style={{transform}} className={burgerIngredientStyles.item + "  mt-4 mr-8"}
                 ref={(node) => drag(drop(node))} draggable={true}>
                <DragIcon type="primary"/>
                <ConstructorElement handleClose={handleClose} text={item.name} price={item.price}
                                    thumbnail={item.image} />
            </div>);
    }
}

export default BurgerIngredient;

