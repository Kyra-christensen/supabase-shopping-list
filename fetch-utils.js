const SUPABASE_URL = 'https://xslhcftovceavryztfcs.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MTUwODQ5MSwiZXhwIjoxOTU3MDg0NDkxfQ.Knrrk29tfhmfWM7wD-rXhLpwRAA-WG6tZQ_2uN_StNg';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getItem() {
    const response = await client
        .from('list')
        .select();
    return checkError(response);
}

export async function createDefaultItem(item, quantity) {
    const response = await client
        .from('list')
        .insert ([{ item, 
            quantity,
            bought: false }]);
    return checkError(response);
}

export async function updateBoughtItem(id) {
    const response = await client
        .from('list')
        .update([{ bought: true }])
        .match({ id: id });
    return response;
}

export async function deleteList() {
    const response = await client
        .from('list')
        .delete();
    return checkError(response);
}

export async function getUser() {
    return client.auth.session();
}


export async function checkAuth() {
    const user = await getUser();

    if (!user) location.replace('../'); 
}

export async function redirectIfLoggedIn() {
    if (await getUser()) {
        location.replace('./shopping-list');
    }
}

export async function signupUser(email, password){
    const response = await client.auth.signUp({ email, password });
    
    return response.user;
}

export async function signInUser(email, password){
    const response = await client.auth.signIn({ email, password });

    return checkError(response);
}

export async function logout() {
    await client.auth.signOut();

    return window.location.href = '../';
}

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}
