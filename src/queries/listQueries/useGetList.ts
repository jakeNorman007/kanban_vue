import { useQuery } from "@tanstack/vue-query";
import { getLists } from "../../services/listApi";
import { useRoute } from "vue-router";

export function useLists() {
    const route = useRoute();
    const id = route.params.id as string;

    const { isLoading, error, data: lists } = useQuery({
        queryKey: ["list", id],
        queryFn: () => getLists(id),
    });

    return { isLoading, error, lists };
};
