
import {auth, currentUser} from "@clerk/nextjs";

const Dashboard = async () =>  {
    const {userId} = auth();
    const user = await currentUser();

    if(!userId || !user) {
        return <div>You are not logged in</div>
    }


    return (
        <div className="justify-center flex">
            <div className="container">
                <div className="bg-gray-200 mt-10 w-[50%] p-5 grid gap-3">
                    <h1 className="text-3xl font-semibold">Welcome</h1>
                    <p><span className="font-bold">Profile Name :</span> {user.username}</p>

                    <p><span className="font-bold">Email Address :</span> {user.emailAddresses[0].emailAddress}</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
