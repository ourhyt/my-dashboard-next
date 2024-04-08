'use client'
import {SimpleWidget} from "@/components";
import { IoCartOutline} from "react-icons/io5";
import {useAppSelector} from "@/store";

export const WidgetsGrid = () => {
    const count=useAppSelector(state => state.counter.count);
    return (
        <div className="flex flex-wrap p-2 items-center justify-center">
            <SimpleWidget
                label="Contador"
                title={`${count}`}
                subTitle="Productos agregados"
                icon={<IoCartOutline size={70} className="text-blue-600" />}
                href="/dashboard/counter"
            />
        </div>
    )
}
