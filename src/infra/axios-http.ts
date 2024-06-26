import { IHttp } from "@/@core/contratos/IHttp";
import axios, { Axios } from "axios";

export class AxiosHttp implements IHttp {

    private client: Axios;

    constructor() {
        this.client = axios.create({
            baseURL: "http://localhost:8080/api"
        });
    }

    async put(path: string, dados: any): Promise<void> {
        try {
            await this.client.put(path, dados);
        } catch (e) {
            console.error(e);
        }
    }

    async delete(path: string): Promise<void> {
        try {
            await this.client.delete(path);
        } catch (e) {
            console.error(e);
        }
    }

    async post<T>(path: string, dados: any): Promise<T> {
        try {
            const resposta = await this.client.post(path, dados);
            return resposta.data;
        } catch (e) {
            console.error(e);
        }
    }

    async get<T>(path: string): Promise<T> {
        try {
            const resposta = await this.client.get(path);
            return resposta.data;
        } catch (e) {
            console.error(e);
        }
    }
}