const urls = {
    company: 'https://random-data-api.com/api/company/random_company',
    user: 'https://random-data-api.com/api/users/random_user',
    phone: 'https://random-data-api.com/api/phone_number/random_phone_number'
}

for (const button of document.getElementsByTagName('button')) {
    button.addEventListener('click', async () => {
        const data = await (await fetch(urls[button.id])).text();
        document.getElementById('content').innerHTML = data;
    })
}