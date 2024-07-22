import { apiInstance } from "@controllers/apiInstance";

export async function deleteMeter(meterId: string): Promise<void> {
    await apiInstance.delete(`meters/${ meterId }`);
}