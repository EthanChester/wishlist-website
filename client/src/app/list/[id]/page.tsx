"use client";

import { wishlistType } from "@/app/types";
import { useParams } from "next/navigation";
import { useState } from "react";

const listIdApiCall = (id: string): wishlistType => {
    // axios.get("http://localhost:8080/list/" + id, loginData).then((response) => {
    //     //TODO
    //     console.log(response);
    // });
    return {
        name: "list",
        id: "1",
        user: '1',
        items: [
            {
                name: "item1",
                url: "https://www.vlr.gg/",
                claimedByUserId: "1",
            },
        ],
    };
};

export default function Page() {
    const params = useParams();
    const { id } = params;
    const [wishlist, setWishlist] = useState<wishlistType>(null);

    if (wishlist === null) {
        if (typeof id === "string") {
            setWishlist(listIdApiCall(id));
        } else {
            setWishlist(listIdApiCall(id[0]));
        }
    }

    return (
        <div>
            <h1>{wishlist ? wishlist.name : "list page" + id}</h1>

            {wishlist ? (
                <ul>
                    {wishlist.items.map((element, i) => {
                        return (
                            <li key={i}>
                                <p>{element.name}</p>
                                <a href={element.url}>{element.url}</a>
                                <p>{element.claimedByUserId}</p>
                            </li>
                        );
                    })}
                </ul>
            ) : (
                <p>no List</p>
            )}
        </div>
    );
}
