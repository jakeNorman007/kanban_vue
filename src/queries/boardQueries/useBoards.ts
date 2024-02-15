import { useQuery } from "@tanstack/vue-query";
import { getAllBoards } from "../../services/boardApi";

export function useBoards() {
    const { isLoading, error, data: boards } = useQuery({
        queryKey: ["board"],
        queryFn: getAllBoards,
    });

    return { isLoading, error, boards };
}
