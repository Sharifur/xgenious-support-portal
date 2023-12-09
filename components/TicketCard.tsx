import { Card, Tag } from "antd";
import Link from "next/link";

const TicketCard = () => {
    return ( 
        <Card className="text-left mb-4">
            <div className="flex justify-between items-center gap-4">
                <Link href={`/home/tickets/${12}`}>
                    <h4 className="text-sm font-bold text-black">
                        <span className="text-gray-500 mr-4">#12345</span>
                        Show notification if today is Friday/Saturday that we are on holiday 
                    </h4>
                </Link>
                <span className="text-xs text-gray-500">Friday, 17 december at 12:00pm</span>
            </div>
            <div className="mt-5">
                <Tag color="error" className="capitalize">ticket is closed</Tag>
                <Tag color="success" className="capitalize">support agent replied </Tag>
                <Tag color="warning" className="capitalize">waiting for reply</Tag>
            </div>
        </Card>
     );
}
 
export default TicketCard;