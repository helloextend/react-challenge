const Item_Favourite =  'ITEM_FAVOURITE';
const Item_Removed = 'ITEM_REMOVED';

export type Action ={
    type : string,
    payload : string
}

function itemFavourite(src:string):Action{
    return{
        type : Item_Favourite,
        payload : src
    }
}

function itemRejected(src:string):Action{
    return{
        type : Item_Removed,
        payload : src
    }
}

export {itemFavourite,itemRejected,Item_Removed,Item_Favourite};