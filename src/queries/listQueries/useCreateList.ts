import { useMutation, useQueryClient } from "@tanstack/vue-query";
import { createList as createListAPI } from "../../services/listApi";

export function useCreateList() {
    const queryClient = useQueryClient();

    const { mutate: createList, isLoading: isCreating } = useMutation({
        mutationFn: createListAPI,
        onSuccess: () => {
            alert("List has been created.");
            queryClient.invalidateQueries({ queryKey: ["list"], });
        },

        onError: (error) => alert(error.message),
    });
    
    return { isCreating, createList };
};
