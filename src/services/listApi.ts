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
//do I need an interface here?? idk.
export async function createList(List: { listName: string; description: string }) {

    const { data, error } = await supabase.from("list").insert({ List }).select();
    if (error) {
        console.log(error);
        throw new Error("List could not be created");
    }

    return data;
};
