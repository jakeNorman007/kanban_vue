import supabase from "./supabase";

//**GET REQUESTS**
//fetches all the lists based on the "board" table foreign id, from the "list" table
export async function getLists(id: string) {

    const { data, error } = await supabase.from("list").select().eq("board_id", id);

    if (error) {
        console.log(error);
        throw new Error("Lists could not be gathered");
    }

    return data;
};

//**CREATE**
//TODO: need to get a query written, then need to get it working for making a new list
export async function createList({ listName } : { listName: string }) {

    const { data, error } = await supabase.from("list").insert([{listName: listName}]).select();

    if (error) {
        console.log(error);
        throw new Error("List could not be created");
    }

    return data;
};
