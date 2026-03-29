// CREATE A TOAST STORE
"use client"

import { useToastStore } from "@/stores/toastStore";

export default function Toast() {
    const toastMessage = useToastStore((state) => state.message);
    if (!toastMessage) return null;

    return (
        <div className=" fixed top-10 right-10 bg-indigo-900 text-indigo-50 font-body">
            {toastMessage}
        </div>

    )
}

//ADD toast to button that triggers when adding to cart
//ADD to remove item in cart
//