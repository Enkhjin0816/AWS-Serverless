const {DynamoDB} = require('@aws-sdk/client-dynamodb')

const db = new DynamoDB({
    region: 'ap-southeast-1',
})

export const createUser = async(event: any) => {
    try {
        console.log("ORLO: ", event)
    } catch(error) {
        console.log(error)
    }
    return {
        statusCode: 200,
        body: JSON.stringify("ORLO: ", event)
    }
}