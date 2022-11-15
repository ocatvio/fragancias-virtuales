export namespace Product {

    export interface Request {
        id: string,
        name: string,
        description: string,
        price: number,
        image: {
            public_id: string,
            secure_url: string
        },
        category: string
    }

    export interface Response {
        allProducts:Array<Request>
    }

    export interface RequestId  {
        allProducts:Request
    }
}

export namespace User {

    export interface Request {
        id: string,
        name: string,
        phone: string,
        address: number,
        email:string,
        image?: {
            public_id: string,
            secure_url: string
        }
       
    }

    export interface Response {
        data:Array<Request>
    }

}


export namespace Menu {

    export interface menuItem {
        title: string,
        tor: string,
        icono: JSX.Element,
        gap?: boolean,
    }

}


export interface auth {
    login:"[Auth] login",
    logout:'[Auth] logout'
} 



