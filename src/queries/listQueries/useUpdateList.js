import { useQueryClient, useMutation } from "@tanstack/vue-query";
import { updateList as updateListApi } from "../../services/listApi";

export function useUpdateList() {
    const queryClient = useQueryClient();

    const { mutate: updateListName, isLoading: isUpdating } = useMutation({
        mutationFn: updateListApi,
        onSuccess: () => {
            console.log("List name updated");
            queryClient.invalidateQueries({
                queryKey: ["update"],
            });
        },

        onError: (error) => console.log(error.message),
    });

    return { updateListName, isUpdating};
};
