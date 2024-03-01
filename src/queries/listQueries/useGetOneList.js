import { useQuery } from "@tanstack/vue-query";
import { getList } from "../../services/listApi";
import { useRoute } from "vue-router";

export function useGetOneList() {
    const route = useRoute();
    const currentId = route.params.listId;

    const { isLoading, data: list, error } = useQuery({
        queryKey: ["list", currentId],
        queryFn: () => getList(currentId),
            retry: false,
    });

    return { isLoading, list, error };
};
