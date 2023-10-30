import React from 'react'
import AdminRoomCard from '../adminMeetingRooms/adminRoomCard';
import AddNewRooms from '../addNewMeetingRooms/addNewRooms';

export default function AdminMeetingRooms() {
    const meetingRooms = [
        { id: "1", name: "Meeting Room 1", status: "available", Occupancy: 6 },
        { id: "2", name: "Meeting Room 2", status: "occupied", Occupancy: 6 },
        { id: "3", name: "Meeting Room 3", status: "available", Occupancy: 4 },
        { id: "4", name: "Meeting Room 4", status: "available", Occupancy: 5 },
        { id: "5", name: "Meeting Room 5", status: "available", Occupancy: 6 },
        { id: "6", name: "Meeting Room 6", status: "available", Occupancy: 6 },
    ];


    return (
        <>
            <AddNewRooms />
            <div className="flex gap-x-6 justify-center gap-y-4 mt-5 flex-wrap">
                {meetingRooms.map((room) => (
                    <AdminRoomCard
                        key={room.id}
                        id={room.id}
                        name={room.name}
                        Occupancy={room.Occupancy} />
                ))}
            </div>
        </>
    );
}
