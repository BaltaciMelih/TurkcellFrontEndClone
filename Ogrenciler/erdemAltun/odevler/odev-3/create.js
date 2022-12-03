const form = document.querySelector('form');
const createPost = async (e) => {
    e.preventDefault();
    const doc = {
        title: form.title.value,
        image: form.image.value,
        date: form.date.value,
        category: form.category.value,
        writer:form.writer.value,
        body: form.body.value,
    }
    await fetch('http://localhost:3000/posts', {
        method: 'POST',
        body: JSON.stringify(doc),
        headers: { 'Content-Type': 'application/json' }
    });
}
form.addEventListener('submit', createPost);

