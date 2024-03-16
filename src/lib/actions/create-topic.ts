'use server';

// Interface FormData
export async function createTopic(formData: FormData) {
    // in the home page
    const name = formData.get('name');
    console.log(name);
    const description = formData.get('description');
    console.log(description);
}
