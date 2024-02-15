import supabase from "./supabase";

//**GET REQUESTS**

//fetches all the lists based on the "board" table foreign id, from the "list" table
export async function getLists(id: string) {
    const { data, error } = await supabase
        .from("list")
        .select()
        .eq("board_id", id);

    if(error) {
        console.log(error);
        throw new Error("Lists could not be gathered");
    }

    console.log(data);

    Object.values(data).forEach(value => {
        console.log(value.id);
    });

    return data;
};
