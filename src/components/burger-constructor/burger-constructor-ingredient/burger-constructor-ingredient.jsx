import React from "react";
import uuid from "react-uuid";
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {useDispatch} from "react-redux";
import burgerIngredientStyles from './burger-constructor-ingredient.module.css';
import {useDrag, useDrop} from "react-dnd";
import {MOVE_ITEMS, REMOVE_ITEM} from "../../../services/actions/burger-constructor";
import PropTypes from "prop-types";
import ingredientType from "../../../utils/ingredient-type";

function BurgerIngredient({item, layout, index}) {

    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch({
            type: REMOVE_ITEM,
            payload: item,
        });
    };

    const Bun = () => {
        const remarkType = layout === 'top' ? ' (верх)' : ' (низ)';
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

    const onDropChange = (dropIndex, dragIndex) => {
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
        drop(item) {
            const dragIndex = index;
            const dropIndex = item.index;
            if (dropIndex !== dragIndex) {
                onDropChange(dragIndex, dropIndex);
            }
        },
    }, [dispatch]);

    const transform = isHover ? 'scale(1.1)' : '';

    if (item.type === 'bun') {
        return (<Bun {...item} layout='top'/>);
    } else {
        return (
            <div style={{transform}} className={burgerIngredientStyles.item + "  mt-4 mr-8"}
                 ref={(node) => drag(drop(node))} draggable={true} key={uuid()}>
                <DragIcon type="primary"/>
                <ConstructorElement handleClose={handleClose} text={item.name} price={item.price}
                                    thumbnail={item.image} />
            </div>);
    }
}

export default BurgerIngredient;

BurgerIngredient.propTypes = {
    item: PropTypes.shape(ingredientType).isRequired,
    layout: PropTypes.string,
    index: PropTypes.number
};