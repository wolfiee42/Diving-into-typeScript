// Promise<string>

const makePromise = (): Promise<string> => {
    return new Promise<string>((res, rej) => {
        const data: string = "Data is fetched.";
        if (data) {
            res(data);
        } else {
            rej('Failed to fetched data.')
        }
    });
};

const getPromise = async (): Promise<string> => {
    const data = await makePromise();
    return data;
};

// Promise<boolean>

const makePromiseBoolean = (): Promise<boolean> => {
    return new Promise<boolean>((res, rej) => {
        const data: boolean = false;
        if (data) {
            res(data);
        } else {
            rej('Failed to fetched data.')
        }
    });
};

const getPromiseBoolean = async (): Promise<boolean> => {
    const data = await makePromiseBoolean();
    return data;
};


// Promise<Object>


type ObjectType = {
    data: string
}
const makePromiseObject = (): Promise<ObjectType> => {
    return new Promise<ObjectType>((res, rej) => {
        const data: ObjectType = { data: "Ki obosta!" };
        if (data) {
            res(data);
        } else {
            rej('Failed to fetched data.')
        }
    });
};

const getPromiseObject = async (): Promise<ObjectType> => {
    const data = await makePromiseObject();
    return data;
};



interface IPost {
    userId: number;
    id: number;
    title: string;
    body: string
};


const getPost = async (): Promise<IPost> => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const parsedData = await response.json();
    return parsedData as IPost;
};


const getTodoData = async (): Promise<void> => {
    const result = await getPost();
    console.log(result);
}
getTodoData();