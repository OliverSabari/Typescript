"use strict";
// Enumns are used when there can be restriction to the values like below,
Object.defineProperty(exports, "__esModule", { value: true });
var SeatAllocation;
(function (SeatAllocation) {
    //by default these below have values of 0,1,2 and goes on but we can also give customized value
    SeatAllocation["aisle"] = "aisle";
    SeatAllocation[SeatAllocation["middle"] = 3] = "middle";
    SeatAllocation[SeatAllocation["window"] = 4] = "window";
})(SeatAllocation || (SeatAllocation = {}));
// The above enum code will generate below large js code
// var SeatAllocation;
// (function (SeatAllocation) {
//     //by default these below have values of 0,1,2 and goes on but we can also give customized value
//     SeatAllocation["aisle"] = "aisle";
//     SeatAllocation[SeatAllocation["middle"] = 3] = "middle";
//     SeatAllocation[SeatAllocation["window"] = 4] = "window";
// })(SeatAllocation || (SeatAllocation = {}));
// let seat = SeatAllocation.aisle;
//But once we add const to enums it will generate less number of js code as below
// const enum SeatAllocation {
//     //by default these below have values of 0,1,2 and goes on but we can also give customized value
//     aisle = "aisle",
//     middle = 3,
//     window
// }
// JS code
// let seat = "aisle" /* SeatAllocation.aisle */;
var seat = SeatAllocation.aisle;
