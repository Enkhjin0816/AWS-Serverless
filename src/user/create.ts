const {DynamoDB} = require('@aws-sdk/client-dynamodb')

const db = new DynamoDB({
    region: 'ap-southeast-1',
})

export const createUser = async(event: any) => {
    try {
        // const {} = db.putItem({
        //     Table
        // })
        console.log("ORLO: ", event)
    } catch(error) {
        console.log(error)
    }
}