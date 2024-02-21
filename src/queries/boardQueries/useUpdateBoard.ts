import { useQueryClient, useMutation } from "@tanstack/vue-query";
import { updateBoard as updateBoardApi } from "../../services/boardApi";

export function useUpdateBoard() {
    const queryClient = useQueryClient();

    const { mutate: updateBoardName, isPending: isEditing } = useMutation({
        mutationFn: updateBoardApi,
        onSuccess: () => {
            console.log("Board name updated");
            queryClient.invalidateQueries({
                queryKey: ["update"],
            });
        },

        onError: (error) => console.log(error.message),
    });

    return { updateBoardName, isEditing };
};
