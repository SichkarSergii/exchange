import { request } from "../utils/netRequest";

export class PaidService {

    async payMethods() {
        return await request({
            url: "payMethods",
            method: "get",
        });
    }

    async calculate(params) {
        const {base, amount, invoicePayMethod, withdrawPayMethod} = params;
        return await request({
            url: `payMethods/calculate?base=${base}&amount=${amount}&invoicePayMethod=${invoicePayMethod}&withdrawPayMethod=${withdrawPayMethod}`,
            method: "get",
        });
    }

    async bids(data) {
        return await request({
            url: "bids",
            method: "post",
            data,
        });
    }

}