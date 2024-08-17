'use server';

import {saveMeal} from "@/lib/meals";
import {redirect} from "next/navigation";

export default async function shareMeal(formData) {

    const meal = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        image: formData.get('image'),
        creator: formData.get('name'),
        creator_email: formData.get('email'),
    }

    await saveMeal(meal);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    redirect(`/meals`);

}
