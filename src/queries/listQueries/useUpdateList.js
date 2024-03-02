import { useQueryClient, useMutation } from "@tanstack/vue-query";
import { updateList as updateListApi } from "../../services/listApi";
import { useRoute } from "vue-router";

export function useUpdateList() {
    const queryClient = useQueryClient();
    const route = useRoute();
    const listId = route.params.listId;

    const { mutate: updateListName, isLoading: isUpdating } = useMutation({
        mutationFn: updateListApi,
        onSuccess: () => {
            console.log("List name updated");
            queryClient.invalidateQueries({
                queryKey: ["list", listId],
            });
        },

        onError: (error) => console.log(error.message),
    });

    return { updateListName, isUpdating};
};
