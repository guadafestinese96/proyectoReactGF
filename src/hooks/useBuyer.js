import { useState } from "react";

export default function useBuyer() {
    const initialValue = {
        name: "",
        email: "",
        lastName: "",
}
    const [buyer, setBuyer] = useState(initialValue);

    const handleInputChange = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value,
        });
    };

    return { buyer, handleInputChange };
}