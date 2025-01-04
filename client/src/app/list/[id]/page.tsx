"use client";

import { useParams } from "next/navigation";

export default function Page() {
    const params = useParams();
    const { id } = params;
    return <h1>list page {id}</h1>
}