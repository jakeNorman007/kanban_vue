import { useQueryClient, useMutation } from "@tanstack/vue-query";
import { updateList as updateListApi } from "../../services/listApi";
import { useRoute } from "vue-router";

export function useUpdateList() {
    const queryClient = useQueryClient();
    const route = useRoute();
    const id = route.params.listId;

    const { mutate: updateListName, isLoading: isUpdating } = useMutation({
        mutationFn: updateListApi(id),
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
