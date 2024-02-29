import { useQueryClient, useMutation } from "@tanstack/vue-query";
import { deleteList as deleteListApi } from "../../services/listApi";

export function useDeleteList() {
    const queryClient = useQueryClient();

    const { isLoading: isDeleting, mutate: deleteList } = useMutation({
        mutationFn: deleteListApi,
        onSuccess: () => {
            console.log("List was deleted");
            queryClient.invalidateQueries({
                queryKey: ["list"],
            });
        },
        onError: (error) => console.log(error.message),
    });

    return { isDeleting, deleteList };
};
