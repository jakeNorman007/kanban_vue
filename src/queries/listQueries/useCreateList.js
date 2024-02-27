import { useMutation, useQueryClient } from "@tanstack/vue-query";
import { createList as createListAPI } from "../../services/listApi";

export function useCreateList() {
    const queryClient = useQueryClient();

    const { mutate: createList, isLoading: isCreating } = useMutation({
        mutationFn: createListAPI,
        onSuccess: () => {
            console.log("List has been created.");
            queryClient.invalidateQueries({ queryKey: ["lists"], });
        },

        onError: (error) => console.log(error.message),
    });
    
    return { isCreating, createList };
};
