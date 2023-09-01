const Item_Selected =  'ITEM_SELECTED';
const Item_Removed = 'ITEM_REMOVED';

export type Action ={
    type : string,
    payload : string
}

function itemSelected(src:string):Action{
    return{
        type : Item_Selected,
        payload : src
    }
}

function itemRejected(src:string):Action{
    return{
        type : Item_Removed,
        payload : src
    }
}

export {itemSelected,itemRejected,Item_Removed,Item_Selected};