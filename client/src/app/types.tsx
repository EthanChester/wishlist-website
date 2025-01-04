export type loginObjectType = {
    email: string;
    password: string;
};

export type wishlistItemType = {
    name: string;
    url: string;
    claimedByUserId: string;
};

export type wishlistType = {
    name: string;
    id: string;
    user: string;
    items: wishlistItemType[];
};