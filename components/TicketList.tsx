import { Pagination, PaginationProps, Radio, RadioChangeEvent, Space } from "antd";
import TicketCard from "./TicketCard";
import { useState } from "react";
import { SizeType } from "antd/es/config-provider/SizeContext";


const TicketList = ({title,pagination=false,sorting=false}: {
    title : string,
    pagination: boolean,
    sorting: boolean
}) => {
    type FilterType = "all" | "open" | "close";
    const [current, setCurrent] = useState(1);
    const [filter, setFilter] = useState<FilterType>('all');

    const onChange: PaginationProps['onChange'] = (page) => {
      console.log(page);
      setCurrent(page);
    };
    const onChangeFilter = (event: RadioChangeEvent) => {
        setFilter(event.target.value);
    }
    return ( 
        <div className="text-left px-2">
            <h2 className="text-2xl font-medium mb-10">{title}</h2>
            {sorting && (
                <Radio.Group value={filter} onChange={onChangeFilter} style={{ marginBottom: 16 }}>
                    <Radio.Button value="all">All</Radio.Button>
                    <Radio.Button value="open">Open</Radio.Button>
                    <Radio.Button value="close">Closed</Radio.Button>
                </Radio.Group>
            )}
            
            <Space direction="vertical" size={16}>
                <TicketCard />
                <TicketCard />
                <TicketCard />
                <TicketCard />
                <TicketCard />
                <TicketCard />
                <TicketCard />
                <TicketCard />
            </Space>
            {pagination && (
                <div className="mt-8 text-center">
                    <Pagination current={current} onChange={onChange} total={50} />
                </div>
            )}
        </div>
     );
}
 
export default TicketList;