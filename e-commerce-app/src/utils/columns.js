const { REACT_APP_ADMIN_ROLE_ID, REACT_APP_PA_ROLE_ID, REACT_APP_PAS_ROLE_ID } = process.env
export const ROLES_LIST_COLUMNS=[
    {
        title:"Roles",
        isSortable: false,
        dataIndex: "role_name",
        key: "role_name",
        sorter: (a, b) => a.role_name.localeCompare(b.role_name)
    },
    {
        title:"Permission",
        isSortable: false,
        dataIndex: "permission_name_tag",
        key: "permission_name_tag",
    },

]

export const COUNTRY_LIST_COLUMNS=[
    {
        title:"Name",
        isSortable: true,
        dataIndex: "countryName",
        key: "countryName",
        sorter: (a, b) => a.countryName.localeCompare(b.countryName)
    },
    {
        title:"Calling Code",
        isSortable: true,
        dataIndex: "callingCode",
        key: "callingCode",
        sorter: (a, b) => a.callingCode.localeCompare(b.callingCode)
    },
    {
        title:"Alpha Code",
        isSortable: true,
        dataIndex: "alphaCode",
        key: "alphaCode",
        sorter: (a, b) => a.alphaCode.localeCompare(b.alphaCode)
    },
    {
        title:"Province Count",
        isSortable: false,
        dataIndex: "provinceCount",
        key: "provinceCount",
    }
    // {
    //     title:"Flag",
    //     isSortable: true,
    //     dataIndex: "flag",
    //     key: "flag",
    //     sorter: (a, b) => a.alphaCode.localeCompare(b.alphaCode)
    // },
    
]

export const TRADER_LIST_COLUMNS=[
    {
        title:"Name",
        isSortable: true,
        dataIndex: "tradersName",
        key: "tradersName",
        sorter: (a, b) => a.tradersName.localeCompare(b.tradersName)
    },
    {
        title:"Trader Id",
        isSortable: true,
        dataIndex: "userID",
        key: "userID",
        // sorter: (a, b) => a.userID.localeCompare(b.userID)
    },
    // {
    //     title:"Email",
    //     isSortable: true,
    //     dataIndex: "email",
    //     key: "email",
    //     // sorter: (a, b) => a.userID.localeCompare(b.userID)
    // },
    {
        title:"Phone Number",
        isSortable: true,
        dataIndex: "storePhoneNumber",
        key: "storePhoneNumber",
        sorter: (a, b) => a.storePhoneNumber.localeCompare(b.storePhoneNumber)
    },
    {
        title:"Store Name",
        isSortable: true,
        dataIndex: "storeName",
        key: "storeName",
        sorter: (a, b) => a.storeName.localeCompare(b.storeName)
    },
    // {
    //     title:"Channel",
    //     isSortable: false,
    //     dataIndex: "channel",
    //     key: "channel",
    //     // sorter: (a, b) => a.channel.localeCompare(b.channel)
    // },
    {
        title:"Total Reedeem",
        isSortable: false,
        dataIndex: "couponRedeem",
        key: "couponRedeem",
        // sorter: (a, b) => a.channel.localeCompare(b.channel)
    },

]


export const TRADER_LIST_DASHBOARD_COLUMNS=[
    {
        title:"Name",
        isSortable: true,
        dataIndex: "tradersName",
        key: "tradersName",
        sorter: (a, b) => a.tradersName.localeCompare(b.tradersName)
    },
    {
        title:"Phone Number",
        isSortable: true,
        dataIndex: "storePhoneNumber",
        key: "storePhoneNumber",
        sorter: (a, b) => a.storePhoneNumber.localeCompare(b.storePhoneNumber)
    },
        {
        title:"Total Reedeem",
        isSortable: false,
        dataIndex: "couponRedeem",
        key: "couponRedeem",
        // sorter: (a, b) => a.channel.localeCompare(b.channel)
    },

]


export const TRADER_REDEEM_COUPON_LIST_COLUMNS=[
    {
        title:"Brand Name",
        isSortable: true,
        dataIndex: "brandName",
        key: "brandName",
        sorter: (a, b) => a.brandName.localeCompare(b.brandName)
    },
    {
        title:"Coupon Code",
        isSortable: true,
        dataIndex: "code",
        key: "code",
        sorter: (a, b) => a.code.toString().localeCompare(b.code.toString())
    },
    {
        title:"Discount (Net Amount)",
        isSortable: true,
        dataIndex: "discount",
        key: "discount",
        sorter: (a, b) => a.discount.toString().localeCompare(b.discount.toString())
    },
    // {
    //     title:"Redeem By",
    //     isSortable: true,
    //     dataIndex: "redeemBy",
    //     key: "redeemBy",
    //     sorter: (a, b) => a.redeemBy.localeCompare(b.redeemBy)
    // },
    // {
    //     title:"Created By",
    //     isSortable: true,
    //     dataIndex: "createdBy",
    //     key: "discount",
    //     sorter: (a, b) => a.discount.localeCompare(b.discount)
    // },
    {
        title:"Start Date",
        isSortable: true,
        dataIndex: "startDate",
        key: "startDate",
        filters: [{
            text: 'Past Week',
            value: true,
        }, {
            text: 'Next Week',
            value: false,
        },
        {
            text: 'This Week',
            value: "1",
        },
        {
            text: 'Today',
            value: "Today",
        },
        ],
        onFilter: (value, record) => {
            return record.createdAtSet === value;
        }
        // sorter: (a, b) => a.startDate.toString().localeCompare(b.startDate.toString())
    },
    {
        title:"End Date",
        isSortable: true,
        dataIndex: "endDate",
        key: "endDate",
        filters: [{
            text: 'Past Week',
            value: true,
        }, {
            text: 'Next Week',
            value: false,
        },
        {
            text: 'This Week',
            value: "1",
        },
        {
            text: 'Today',
            value: "Today",
        },
        ],
        onFilter: (value, record) => {
            return record.endDateSet === value;
        }
        // sorter: (a, b) => a.endDate.toString().localeCompare(b.endDate.toString())
    },
     {
        title:"Is Redeemed?",
        isSortable: true,
        dataIndex: "isRedeemed",
        key: "isRedeemed",
        filters: [{
            text: 'Settled',
            value: true,
        }, {
            text: 'Redeem',
            value: false,
        }],
        align: "center",
        onFilter: (value, record) => {
            return record.isRedeemedSet === value;
        }
        // sorter: (a, b) => a.isredeemed.localeCompare(b.isredeemed)
    },
]

export const PERMISSIONS_LIST_COLUMNS=[
    {
        title:"Permission",
        isSortable: true,
        dataIndex: "permission_name",
        key: "permission_name",
        sorter: (a, b) => a.permission_name.localeCompare(b.permission_name)
    }
]


export const CONTACT_LIST_COLUMNS=[
    {
        title:"Name",
        isSortable: true,
        dataIndex: "name",
        key: "name",
        sorter: (a, b) => a.name.localeCompare(b.name)
    },
    // {
    //     title:"Calling Code",
    //     isSortable: false,
    //     dataIndex: "callingCode",
    //     key: "callingCode",
    //     sorter: (a, b) => a.callingCode.localeCompare(b.callingCode)
    // },
    {
        title:"Phone Number",
        isSortable: true,
        dataIndex: "phone",
        key: "phone",
        sorter: (a, b) => a.phone.localeCompare(b.phone)
    },
    // {
    //     title:"Email",
    //     isSortable: false,
    //     dataIndex: "email",
    //     key: "email",
    //     sorter: (a, b) => a.email.localeCompare(b.email)
    // },
    {
        title:"Channel",
        isSortable: true,
        dataIndex: "channel",
        key: "channel",
        sorter: (a, b) => a.channel.localeCompare(b.channel)
    },
    {
        title:"Created On",
        isSortable: true,
        dataIndex: "createdAt",
        key: "createdAt",
        filters: [{
            text: 'Past Week',
            value: true,
        }, 
        // {
        //     text: 'Next Week',
        //     value: false,
        // },
        {
            text: 'This Week',
            value: "1",
        },
        {
            text: 'Today',
            value: "Today",
        },
        ],
        onFilter: (value, record) => {
            return record.createdAtSet === value;
        }
    },
    {
        title:"Created By",
        isSortable: true,
        dataIndex: "createdBy",
        key: "createdBy",
        sorter: (a, b) => a.createdBy.localeCompare(b.createdBy)
    },
    {
        title:"Coupon Code",
        isSortable: true,
        dataIndex: "couponCode",
        key: "couponCode",
        // sorter: (a, b) => a.couponCode.localeCompare(b.couponCode)
    },
    {
        title:"Next Followup Date",
        isSortable: true,
        dataIndex: "nextFollowUp",
        key: "nextFollowUp",
        filters: [{
            text: 'Past Week',
            value: true,
        }, {
            text: 'Next Week',
            value: false,
        },
        {
            text: 'This Week',
            value: "This Week",
        },
        {
            text: 'Today',
            value: "Today",
        },
        ],
        onFilter: (value, record) => {
            return record.nextFollowUpSet === value;
        }
        // sorter: (a, b) => a.nextFollowUp.localeCompare(b.nextFollowUp)
    },
    {
        title: "Status",
        isSortable: false,
        dataIndex: "isUser",
        filters: [{
            text: 'Yes',
            value: true,
        }, {
            text: 'No',
            value: false,
        }],
        key: "isUser",
        align: "center",
        onFilter: (value, record) => {
            return record.isUserSet === value;
        }
    }
    // {
    //     title:"Is Active ?",
    //     isSortable: false,
    //     dataIndex: "isActive",
    //     key: "isActive",
    //     sorter: (a, b) => a.isActive.localeCompare(b.isActive)
    // },

]


export const CONTACT_LIST_DASHBOARD_COLUMNS=[
    {
        title:"Name",
        isSortable: true,
        dataIndex: "name",
        key: "name",
        sorter: (a, b) => a.name.localeCompare(b.name)
    },
    {
        title:"Phone Number",
        isSortable: true,
        dataIndex: "phone",
        key: "phone",
        sorter: (a, b) => a.phone.localeCompare(b.phone)
    },
    
    
    {
        title: "Existing User?",
        isSortable: false,
        dataIndex: "isUser",
        filters: [{
            text: 'Yes',
            value: true,
        }, {
            text: 'No',
            value: false,
        }],
        key: "isUser",
        align: "center",
        onFilter: (value, record) => {
            return record.isUserSet === value;
        }
    }

]


export const CONTACTFOLLOWUP_LIST_COLUMNS=[
    {
        title:"Date",
        isSortable: true,
        dataIndex: "nextFollowUp",
        key: "nextFollowUp",
        // sorter: (a, b) => a.date.localeCompare(b.date)
    },
    {
        title:"Status",
        isSortable: true,
        dataIndex: "status",
        key: "status",
        // sorter: (a, b) => a.status.localeCompare(b.status)
    },
]

export const PROVINCES_LIST_COLUMNS=[
    {
        title:"Province",
        isSortable: false,
        dataIndex: "province_name",
        key: "province_name",
    },
    {
        title:"Country",
        isSortable: false,
        dataIndex: "country_name",
        key: "country_name",
    },
    {
        title:"Total Cities",
        isSortable: false,
        dataIndex: "total_cities",
        key: "total_cities",
        align: "center"
    },
]

export const BRAND_LIST_COLUMNS=[
    {
        title:"Name",
        isSortable: true,
        dataIndex: "brandName",
        key: "brandName",
        sorter: (a, b) => a.brandName.localeCompare(b.brandName)
    },
    {
        title:"Default Discount (Net Amount)",
        isSortable: true,
        dataIndex: "discount",
        key: "discount",
        sorter: (a, b) => a.discount.toString().localeCompare(b.discount.toString())
    },
]

export const BRAND_DASHBOARD_LIST_COLUMNS=[
    {
        title:"Name",
        isSortable: true,
        dataIndex: "brandName",
        key: "brandName",
        sorter: (a, b) => a.brandName.localeCompare(b.brandName)
    },
]

export const CITY_LIST_COLUMNS=[
    {
        title:"City",
        isSortable: false,
        dataIndex: "city_name",
        key: "city_name",
        sorter: (a, b) => a.city_name.localeCompare(b.city_name)
    },
    {
        title:"Province",
        isSortable: false,
        dataIndex: "province_name",
        key: "province_name",
        sorter: (a, b) => a.province_name.localeCompare(b.province_name)
    },
]

export const USER_LIST_COLUMNS=[
    {
        title:"",
        isSortable: false,
        dataIndex: "profilePic",
        key: "profilePic",
    },
    {
        title:"Name",
        isSortable: false,
        dataIndex: "name",
        key: "name",
        sorter: (a, b) => a.name.localeCompare(b.name)
    },{
        title:"Staff Id",
        isSortable: false,
        dataIndex: "userStaffId",
        key: "userStaffId",
        sorter: (a, b) => a.userStaffId.localeCompare(b.userStaffId)
    },
    {
        title:"Email",
        isSortable: false,
        dataIndex: "email",
        key: "email",
        sorter: (a, b) => a.email.localeCompare(b.email)
    },
    {
        title:"Role",
        isSortable: false,
        dataIndex: "roleName",
        key: "roleName",
        filters: [{
            text: 'Admin',
            value: REACT_APP_ADMIN_ROLE_ID,
        }, {
            text: 'PA',
            value: REACT_APP_PA_ROLE_ID,
        }, {
            text: 'Team Leader',
            value: REACT_APP_PAS_ROLE_ID
        }],
        onFilter: (value, record) => {
            return record.roleId === value;
        },
        sorter: (a, b) => a.roleName.localeCompare(b.roleName)
    },
    {
        title:"Is Available?",
        isSortable: false,
        dataIndex: "allocated",
        key: "allocated",
        align: "center",
        filters: [{
            text: 'Available',
            value: false,
        }, {
            text: 'Unavailable',
            value: true,
        }],
        onFilter: (value, record) => {
            return record.usersAssignedToTeam === value;
        }
        // sorter: (a, b) => a.allocated.localeCompare(b.allocated)
    },
    {
        title:"Is Admin?",
        isSortable: false,
        dataIndex: "isAdminTrue",
        key: "isAdminTrue",
        align: "center",
        filters: [{
            text: 'Admin',
            value: true,
        }, {
            text: 'Not Admin',
            value: false,
        }],
        onFilter: (value, record) => {
            return record.isAdmin === value;
        }
        // sorter: (a, b) => a.allocated.localeCompare(b.allocated)
    },
]



export const TEAM_MEMBER_LIST_COLUMNS=[
    {
        title:"Name",
        isSortable: false,
        dataIndex: "name",
        key: "name",
    },
]
   

export const SHIFT_LIST_COLUMNS=[
    {
        title:"Start Time",
        isSortable: false,
        dataIndex: "shiftStartTime",
        key: "shiftStartTime",
        sorter: (a, b) => a.shiftStartTime.localeCompare(b.shiftStartTime)
    },
    {
        title:"End Time",
        isSortable: false,
        dataIndex: "shiftEndTime",
        key: "shiftEndTime",
        sorter: (a, b) => a.shiftEndTime.localeCompare(b.shiftEndTime)
    },
    {
        title:"Shift Hours",
        isSortable: false,
        dataIndex: "shiftHours",
        key: "shiftHours",
        // sorter: (a, b) => a.shiftHours1.localeCompare(b.shiftHours1)
    }
]


export const TEAM_LIST_COLUMNS=[
    {
        title:"Name",
        isSortable: false,
        dataIndex: "teamName",
        key: "teamName",
        sorter: (a, b) => a.teamName.localeCompare(b.teamName)
    },
    {
        title:"Team Leader",
        isSortable: false,
        dataIndex: "sName",
        key: "sName",
        sorter: (a, b) => a.sName.localeCompare(b.sName)
    },
    {
        title:"Members",
        isSortable: false,
        dataIndex: "member",
        key: "member",
        // sorter: (a, b) => a.sName.localeCompare(b.sName)
    },
    
    // {
    //     title:"Shifts",
    //     isSortable: false,
    //     dataIndex: "shift",
    //     key: "shift",
    //     // sorter: (a, b) => a.sName.localeCompare(b.sName)
    // },
]
export const STARTERKITS_LIST_COLUMNS=[
    {
        title:"Name",
        isSortable: true,
        dataIndex: "starterKitName",
        key: "starterKitName",
        sorter: (a, b) => a.starterKitName.localeCompare(b.starterKitName)
    },
    {
        title:"Brand Name",
        isSortable: true,
        dataIndex: "brandName",
        key: "brandName",
        sorter: (a, b) => a.brandName.localeCompare(b.brandName)
    },
    // {
    //     title:"Comment",
    //     isSortable: true,
    //     dataIndex: "comment",
    //     key: "comment",
    //     sorter: (a, b) => a.comment.localeCompare(b.comment)
    // },
    // {
    //     title:"Discount (Net Amount)",
    //     isSortable: true,
    //     dataIndex: "discount",
    //     key: "discount",
    //     sorter: (a, b) => a.discount.toString().localeCompare(b.discount.toString())
    // },
    {
        title:"Total Quantity",
        isSortable: true,
        dataIndex: "totalQuantity",
        key: "totalQuantity",
        sorter: (a, b) => a.totalQuantity.toString().localeCompare(b.totalQuantity.toString())
    },
    {
        title:"Assigned To Teams",
        isSortable: true,
        dataIndex: "usedQty",
        key: "usedQty",
        sorter: (a, b) => a.usedQty.toString().localeCompare(b.usedQty.toString())
    },
    {
        title:"Given To Customer",
        isSortable: true,
        dataIndex: "givenToCustomer",
        key: "givenToCustomer",
        sorter: (a, b) => a.givenToCustomer.toString().localeCompare(b.givenToCustomer.toString())
    },
    {
        title:"Balance",
        isSortable: true,
        dataIndex: "balanceQty",
        key: "balanceQty",
        sorter: (a, b) => a.balanceQty.toString().localeCompare(b.balanceQty.toString())
    },
    // {
    //     title:"Created At",
    //     isSortable: true,
    //     dataIndex: "createdAt",
    //     key: "createdAt",
    //     sorter: {
    //         compare: (a, b) => {
    //           const ad = a.createdAt || 0;
    //           const bd = b.createdAt || 0;
    //           const diff = new Date(ad) - new Date(bd);
    //           return diff;
    //         },
    //     },
    // }
]

export const TARGETS_LIST_COLUMNS = [
    {
        title: "Month - Year",
        isSortable: true,
        dataIndex: "month",
        key: "month",
        sorter: (a, b) => a.month.localeCompare(b.month)
    },
    {
        title: "Assigned Targets",
        isSortable: true,
        dataIndex:"assigned_target",
        key: "assigned_target",
        sorter: (a, b) => a.assigned_target.toString().localeCompare(b.assigned_target.toString())
    },
    {
        title: "Achieved Targets",
        isSortable: true,
        dataIndex: "achieved_target",
        key: "achieved_target",
        sorter: (a, b) => a.achieved_target.toString().localeCompare(b.achieved_target.toString())
    },
    {
        title: "Not Achieved",
        isSortable: true,
        dataIndex: "pending_target",
        key: "pending_target",
        sorter: (a, b) => a.pending_target.toString().localeCompare(b.pending_target.toString())
    },
    {
        title: "Requested Targets",
        isSortable: true,
        dataIndex: "request_targets",
        key: "request_targets",
        sorter: (a, b) => a.request_targets.toString().localeCompare(b.request_targets.toString())
    },
    {
        title: "Request Status",
        isSortable: false,
        dataIndex: "request_status",
        key: "request_status",
        filters: [{
            text: 'Pending',
            value: true,
        }, {
            text: 'Approved',
            value: false,
        }],
        onFilter: (value, record) => {
            return record.is_pending === value;
        },
    }
]

export const TEAM_DETAIL_STARTERKITSTEAM_LIST_COLUMNS=[
    // {
    //     title:"Team Name",
    //     isSortable: true,
    //     dataIndex: "teamName",
    //     key: "teamName",
    //     // sorter: (a, b) => a.teamName.localeCompare(b.teamName)
    // },
    {
        title:"Starter Kit Name",
        isSortable: true,
        dataIndex: "starterKitName",
        key: "starterKitName",
        sorter: (a, b) => a.starterKitName.localeCompare(b.starterKitName)
    },
    // {
    //     title:"Comment",
    //     isSortable: true,
    //     dataIndex: "comment",
    //     key: "comment",
    //     sorter: (a, b) => a.comment.localeCompare(b.comment)
    // },
    {
        title:"Assigned",
        isSortable: true,
        dataIndex: "totalQuantityStarterKitTeam",
        key: "totalQuantityStarterKitTeam",
        sorter: (a, b) => a.totalQuantityStarterKitTeam.toString().localeCompare(b.totalQuantityStarterKitTeam.toString())
    },
    {
        title:"Given To Members",
        isSortable: true,
        dataIndex: "assigned_qty",
        key: "assigned_qty",
        sorter: (a, b) => a.assigned_qty.toString().localeCompare(b.assigned_qty.toString())
    },
    {
        title:"Given To Customer",
        isSortable: true,
        dataIndex: "givenToCustomer",
        key: "givenToCustomer",
        sorter: (a, b) => a.givenToCustomer.toString().localeCompare(b.givenToCustomer.toString())
    },
    {
        title:"Balance",
        isSortable: true,
        dataIndex: "balance_qty",
        key: "balance_qty",
        sorter: (a, b) => a.balance_qty.toString().localeCompare(b.balance_qty.toString())
    }
]

export const STARTERKITSTEAM_LIST_COLUMNS=[
    {
        title:"Team Name",
        isSortable: true,
        dataIndex: "teamName",
        key: "teamName",
        sorter: (a, b) => a.teamName.localeCompare(b.teamName)
    },
    {
        title:"Starter Kit Name",
        isSortable: true,
        dataIndex: "starterKitName",
        key: "starterKitName",
        sorter: (a, b) => a.starterKitName.localeCompare(b.starterKitName)
    },
    // {
    //     title:"Comment",
    //     isSortable: true,
    //     dataIndex: "comment",
    //     key: "comment",
    //     sorter: (a, b) => a.comment.localeCompare(b.comment)
    // },
    {
        title:"Assigned",
        isSortable: true,
        dataIndex: "totalQuantityStarterKitTeam",
        key: "totalQuantityStarterKitTeam",
        sorter: (a, b) => a.totalQuantityStarterKitTeam.toString().localeCompare(b.totalQuantityStarterKitTeam.toString())
    },
    {
        title:"Given To Members",
        isSortable: true,
        dataIndex: "assigned_qty",
        key: "assigned_qty",
        sorter: (a, b) => a.assigned_qty.toString().localeCompare(b.assigned_qty.toString())
    },
    {
        title:"Given To Customer",
        isSortable: true,
        dataIndex: "givenToCustomer",
        key: "givenToCustomer",
        sorter: (a, b) => a.givenToCustomer.toString().localeCompare(b.givenToCustomer.toString())
    },
    {
        title:"Balance",
        isSortable: true,
        dataIndex: "balance_qty",
        key: "balance_qty",
        sorter: (a, b) => a.balance_qty.toString().localeCompare(b.balance_qty.toString())
    },
    // {
    //     title:"Created At",
    //     isSortable: true,
    //     dataIndex: "createdAt",
    //     key: "createdAt",
    //     sorter: {
    //         compare: (a, b) => {
    //           const ad = a.createdAt || 0;
    //           const bd = b.createdAt || 0;
    //           const diff = new Date(ad) - new Date(bd);
    //           return diff;
    //         },
    //     },
    // }
]

export const STARTERKITSTEAM_LEADER_DASHBOARD_LIST_COLUMNS=[
    {
        title:"Starter Kit Name",
        isSortable: true,
        dataIndex: "starterKitName",
        key: "starterKitName",
        // sorter: (a, b) => a.starterKitName.localeCompare(b.starterKitName)
    },
    {
        title:"Assigned",
        isSortable: true,
        dataIndex: "totalQuantityStarterKitTeam",
        key: "totalQuantityStarterKitTeam",
        // sorter: (a, b) => a.totalQuantityStarterKitTeam.toString().localeCompare(b.totalQuantityStarterKitTeam.toString())
    },
    {
        title:"Balance",
        isSortable: true,
        dataIndex: "balance_qty",
        key: "balance_qty",
        // sorter: (a, b) => a.balance_qty.toString().localeCompare(b.balance_qty.toString())
    },
    
]

export const STARTERKITSTEAMASSIGNMENT_LIST_COLUMNS=[
    {
        title:"Team Name",
        isSortable: true,
        dataIndex: "teamName",
        key: "teamName",
        // sorter: (a, b) => a.teamName.localeCompare(b.teamName)
    },
    {
        title:"Assigned",
        isSortable: true,
        dataIndex: "totalQuantityStarterKitTeam",
        key: "totalQuantityStarterKitTeam",
        sorter: (a, b) => a.totalQuantityStarterKitTeam.toString().localeCompare(b.totalQuantityStarterKitTeam.toString())
    },
    {
        title:"Given To Members",
        isSortable: true,
        dataIndex: "totalQuantityAssignedToMember",
        key: "totalQuantityAssignedToMember",
        sorter: (a, b) => a.totalQuantityAssignedToMember.toString().localeCompare(b.totalQuantityAssignedToMember.toString())
    },
    {
        title:"Given To Customer",
        isSortable: true,
        dataIndex: "givenToCustomer",
        key: "givenToCustomer",
        sorter: (a, b) => a.givenToCustomer.toString().localeCompare(b.givenToCustomer.toString())
    },
    {
        title:"Balance",
        isSortable: true,
        dataIndex: "balanceQty",
        key: "balanceQty",
        sorter: (a, b) => a.balanceQty.toString().localeCompare(b.balanceQty.toString())
    },
]





export const STARTERKITSMEMBER_LIST_COLUMNS=[
    
    {
        title:"Starter Kit Name",
        isSortable: true,
        dataIndex: "starterKitName",
        key: "starterKitName",
        // sorter: (a, b) => a.starterKitName.localeCompare(b.starterKitName)
    },
    // {
    //     title:"Comment",
    //     isSortable: true,
    //     dataIndex: "comment",
    //     key: "comment",
    //     sorter: (a, b) => a.comment.localeCompare(b.comment)
    // },
    {
        title:"Assigned Quantity",
        isSortable: true,
        dataIndex: "totalQuantity",
        key: "totalQuantity",
        sorter: (a, b) => a.totalQuantity.toString().localeCompare(b.totalQuantity.toString())
    },
    {
        title:"Given To Customers",
        isSortable: true,
        dataIndex: "usedQty",
        key: "usedQty",
        sorter: (a, b) => a.usedQty.toString().localeCompare(b.usedQty.toString())
    },
    {
        title:"Balance",
        isSortable: true,
        dataIndex: "balanceQuantity",
        key: "balanceQuantity",
        sorter: (a, b) => a.balanceQuantity.toString().localeCompare(b.balanceQuantity.toString())
    },
    {
        title:"Requested Quantity",
        isSortable: true,
        dataIndex: "pendingQuantity",
        key: "pendingQuantity",
        sorter: (a, b) => a.pendingQuantity.toString().localeCompare(b.pendingQuantity.toString())
    },
    {
        title:"Request Status",
        isSortable: true,
        dataIndex: "Assigned",
        key: "Assigned",
        filters: [{
            text: 'Pending',
            value: true,
        }, {
            text: 'Approved',
            value: false,
        }
        ],
        onFilter: (value, record) => {
            return record.isPending === value;
        }
        // sorter: (a, b) => a.balanceQuantity.toString().localeCompare(b.balanceQuantity.toString())
    },
]


export const GWPSMEMBER_LIST_COLUMNS=[
    
    {
        title:"Gift With Purchase",
        isSortable: true,
        dataIndex: "gwpName",
        key: "gwpName",
        // sorter: (a, b) => a.starterKitName.localeCompare(b.starterKitName)
    },
    // {
    //     title:"Comment",
    //     isSortable: true,
    //     dataIndex: "comment",
    //     key: "comment",
    //     sorter: (a, b) => a.comment.localeCompare(b.comment)
    // },
    {
        title:"Assigned",
        isSortable: true,
        dataIndex: "totalQuantity",
        key: "totalQuantity",
        sorter: (a, b) => a.totalQuantity.toString().localeCompare(b.totalQuantity.toString())
    },
    {
        title:"Given To Purchaser",
        isSortable: true,
        dataIndex: "usedQty",
        key: "usedQty",
        sorter: (a, b) => a.usedQty.toString().localeCompare(b.usedQty.toString())
    },
    {
        title:"Balance",
        isSortable: true,
        dataIndex: "balanceQuantity",
        key: "balanceQuantity",
        sorter: (a, b) => a.balanceQuantity.toString().localeCompare(b.balanceQuantity.toString())
    },
    {
        title:"Requested Quantity",
        isSortable: true,
        dataIndex: "pendingQuantity",
        key: "pendingQuantity",
        sorter: (a, b) => a.pendingQuantity.toString().localeCompare(b.pendingQuantity.toString())
    },
    {
        title:"Request Status",
        isSortable: true,
        dataIndex: "isItPending",
        key: "isItPending",
        filters: [{
            text: 'Pending',
            value: true,
        }, {
            text: 'Approved',
            value: false,
        }
        ],
        onFilter: (value, record) => {
            return record.isPending === value;
        }
        // sorter: (a, b) => a.balanceQuantity.toString().localeCompare(b.balanceQuantity.toString())
    },
]


export const GWPS_LIST_COLUMNS=[
    {
        title:"Brand Name",
        isSortable: true,
        dataIndex: "brandName",
        key: "brandName",
        sorter: (a, b) => a.brandName.localeCompare(b.brandName)
    },
    {
        title:"Promotion Name",
        isSortable: true,
        dataIndex: "promotionName",
        key: "promotionName",
        sorter: (a, b) => a.promotionName.localeCompare(b.promotionName)
    },
    {
        title:"Mechanic Name",
        isSortable: true,
        dataIndex: "mechanicName",
        key: "mechanicName",
        // sorter: (a, b) => a.mechanicName.localeCompare(b.mechanicName)
    },
    
    // {
    //     title:"Comment",
    //     isSortable: true,
    //     dataIndex: "comment",
    //     key: "comment",
    //     sorter: (a, b) => a.comment.localeCompare(b.comment)
    // },
    {
        title:"Promotion End Date",
        isSortable: true,
        dataIndex: "expiryDate",
        key: "expiryDate",
        filters: [{
            text: 'Past Week',
            value: true,
        }, {
            text: 'Next Week',
            value: false,
        },
        {
            text: 'This Week',
            value: "1",
        },
        {
            text: 'Today',
            value: "Today",
        },
        ],
        onFilter: (value, record) => {
            return record.expiryDateSet === value;
        }
        // sorter: (a, b) => a.expiryDate.toString().localeCompare(b.expiryDate.toString())
    },
    {
        title:"Total Quantity",
        isSortable: true,
        dataIndex: "totalQuantity",
        key: "totalQuantity",
        sorter: (a, b) => a.totalQuantity.toString().localeCompare(b.totalQuantity.toString())
    },
    {
        title:"Assigned To Teams",
        isSortable: true,
        dataIndex: "usedQty",
        key: "usedQty",
        sorter: (a, b) => a.usedQty.toString().localeCompare(b.usedQty.toString())
    },
    {
        title:"Given To Customer",
        isSortable: true,
        dataIndex: "givenToCustomer",
        key: "givenToCustomer",
        sorter: (a, b) => a.givenToCustomer.toString().localeCompare(b.givenToCustomer.toString())
    },
    {
        title:"Balance",
        isSortable: true,
        dataIndex: "balanceQty",
        key: "balanceQty",
        sorter: (a, b) => a.balanceQty.toString().localeCompare(b.balanceQty.toString())
    },
    // {
    //     title:"Created At",
    //     isSortable: true,
    //     dataIndex: "createdAt",
    //     key: "createdAt",
    //     sorter: {
    //         compare: (a, b) => {
    //           const ad = a.createdAt || 0;
    //           const bd = b.createdAt || 0;
    //           const diff = new Date(ad) - new Date(bd);
    //           return diff;
    //         },
    //     },
    // }
]

export const GWPSTEAM_LIST_COLUMNS=[
   {
        title:"Team Name",
        isSortable: true,
        dataIndex: "teamName",
        key: "teamName",
        sorter: (a, b) => a.teamName.localeCompare(b.teamName)
    },
    {
        title:"Gwp Promotion Name",
        isSortable: true,
        dataIndex: "gwpPromotionName",
        key: "gwpPromotionName",
        sorter: (a, b) => a.gwpPromotionName.localeCompare(b.gwpPromotionName)
    },
    // {
    //     title:"Comment",
    //     isSortable: true,
    //     dataIndex: "comment",
    //     key: "comment",
    //     sorter: (a, b) => a.comment.localeCompare(b.comment)
    // },
    {
        title:"Assigned",
        isSortable: true,
        dataIndex: "totalQuantity",
        key: "totalQuantity",
        sorter: (a, b) => a.totalQuantity.toString().localeCompare(b.totalQuantity.toString())
    },
    {
        title:"Given To Members",
        isSortable: true,
        dataIndex: "usedQty",
        key: "usedQty",
        sorter: (a, b) => a.usedQty.toString().localeCompare(b.usedQty.toString())
    },
    {
        title:"Given To Customer",
        isSortable: true,
        dataIndex: "givenToCustomer",
        key: "givenToCustomer",
        sorter: (a, b) => a.givenToCustomer.toString().localeCompare(b.givenToCustomer.toString())
    },
    {
        title:"Balance",
        isSortable: true,
        dataIndex: "balanceQty",
        key: "balanceQty",
        sorter: (a, b) => a.balanceQty.toString().localeCompare(b.balanceQty.toString())
    },
    // {
    //     title:"Created At",
    //     isSortable: true,
    //     dataIndex: "createdAt",
    //     key: "createdAt",
    //     sorter: {
    //         compare: (a, b) => {
    //           const ad = a.createdAt || 0;
    //           const bd = b.createdAt || 0;
    //           const diff = new Date(ad) - new Date(bd);
    //           return diff;
    //         },
    //     },
    // }
]

export const GWPSTEAM_LEADER_DASHBOARD_LIST_COLUMNS=[
    {
        title:"Promotion Name",
        isSortable: true,
        dataIndex: "gwpPromotionName",
        key: "gwpPromotionName",
    },
    {
        title:"Assigned",
        isSortable: true,
        dataIndex: "totalQuantity",
        key: "totalQuantity",
    },
    {
        title:"Balance",
        isSortable: true,
        dataIndex: "balanceQty",
        key: "balanceQty",
    },
    
]

export const GWPSTEAMASSIGNMENT_LIST_COLUMNS=[
   {
        title:"Team Name",
        isSortable: true,
        dataIndex: "teamName",
        key: "teamName",
        // sorter: (a, b) => a.teamName.localeCompare(b.teamName)
    },
    {
        title:"Assigned",
        isSortable: true,
        dataIndex: "totalQuantity",
        key: "totalQuantity",
        sorter: (a, b) => a.totalQuantity.toString().localeCompare(b.totalQuantity.toString())
    },
    {
        title:"Given To Members",
        isSortable: true,
        dataIndex: "totalQuantityAssignedToMember",
        key: "totalQuantityAssignedToMember",
        sorter: (a, b) => a.totalQuantityAssignedToMember.toString().localeCompare(b.totalQuantityAssignedToMember.toString())
    },
    {
        title:"Given To Customer",
        isSortable: true,
        dataIndex: "givenToCustomer",
        key: "givenToCustomer",
        sorter: (a, b) => a.givenToCustomer.toString().localeCompare(b.givenToCustomer.toString())
    },
    {
        title:"Balance",
        isSortable: true,
        dataIndex: "balanceQty",
        key: "balanceQty",
        sorter: (a, b) => a.balanceQty.toString().localeCompare(b.balanceQty.toString())
    }
]

export const GWPSTEAM_LIST_COLUMNS_TEAM=[

    {
        title:"Promotion Name",
        isSortable: true,
        dataIndex: "GWPName",
        key: "GWPName",
        sorter: (a, b) => a.GWPName.localeCompare(b.GWPName)
    },
    // {
    //     title:"Comment",
    //     isSortable: true,
    //     dataIndex: "comment",
    //     key: "comment",
    //     sorter: (a, b) => a.comment.localeCompare(b.comment)
    // },
    {
        title:"Assigned",
        isSortable: true,
        dataIndex: "totalQuantity",
        key: "totalQuantity",
        sorter: (a, b) => a.totalQuantity.toString().localeCompare(b.totalQuantity.toString())
    },
    {
        title:"Given To Members",
        isSortable: true,
        dataIndex: "usedQty",
        key: "usedQty",
        sorter: (a, b) => a.usedQty.toString().localeCompare(b.usedQty.toString())
    },
    {
        title:"Given To Customer",
        isSortable: true,
        dataIndex: "givenToCustomer",
        key: "givenToCustomer",
        sorter: (a, b) => a.givenToCustomer.toString().localeCompare(b.givenToCustomer.toString())
    },
    {
        title:"Balance",
        isSortable: true,
        dataIndex: "balanceQty",
        key: "balanceQty",
        sorter: (a, b) => a.balanceQty.toString().localeCompare(b.balanceQty.toString())
    },
]

export const STARTERKIT_CONTACT_LIST_COLUMNS=[
    {
        title:"Name",
        isSortable: true,
        dataIndex: "name",
        key: "name",
        sorter: (a, b) => a.name.localeCompare(b.name)
    },
    // {
    //     title:"Calling Code",
    //     isSortable: false,
    //     dataIndex: "callingCode",
    //     key: "callingCode",
    //     sorter: (a, b) => a.callingCode.localeCompare(b.callingCode)
    // },
    {
        title:"Phone Number",
        isSortable: true,
        dataIndex: "phone",
        key: "phone",
        sorter: (a, b) => a.phone.localeCompare(b.phone)
    },
    // {
    //     title:"Email",
    //     isSortable: false,
    //     dataIndex: "email",
    //     key: "email",
    //     sorter: (a, b) => a.email.localeCompare(b.email)
    // },
    // {
    //     title:"Date of Birth",
    //     isSortable: false,
    //     dataIndex: "dob",
    //     key: "dob",
    //     sorter: (a, b) => a.dob.localeCompare(b.dob)
    // },
    // {
    //     title:"Channel",
    //     isSortable: true,
    //     dataIndex: "channel",
    //     key: "channel",
    //     sorter: (a, b) => a.channel.localeCompare(b.channel)
    // },
    {
        title:"Given At",
        isSortable: true,
        dataIndex: "createdAt",
        key: "createdAt",
        sorter: {
            compare: (a, b) => {
              const ad = a.createdAt || 0;
              const bd = b.createdAt || 0;
              const diff = new Date(ad) - new Date(bd);
              return diff;
            },
        },
    },
    {
        title:"Given By",
        isSortable: true,
        dataIndex: "createdBy",
        key: "createdBy",
        sorter: (a, b) => a.createdBy.localeCompare(b.createdBy)
    },
    {
        title:"Next Followup Date",
        isSortable: true,
        dataIndex: "nextFollowUp",
        key: "nextFollowUp",
        filters: [{
            text: 'Past Week',
            value: true,
        }, {
            text: 'Next Week',
            value: false,
        },
        {
            text: 'This Week',
            value: "This Week",
        },
        {
            text: 'Today',
            value: "Today",
        },
        ],
        onFilter: (value, record) => {
            return record.nextFollowUpSet === value;
        }
        // sorter: (a, b) => a.nextFollowUp.localeCompare(b.nextFollowUp)
    },
    {
        title: "Status",
        isSortable: false,
        dataIndex: "isUser",
        filters: [{
            text: 'Yes',
            value: true,
        }, {
            text: 'No',
            value: false,
        }],
        key: "isUser",
        align: "center",
        onFilter: (value, record) => {
            return record.isUserSet === value;
        }
    }
    // {
    //     title:"Is Active ?",
    //     isSortable: false,
    //     dataIndex: "isActive",
    //     key: "isActive",
    //     sorter: (a, b) => a.isActive.localeCompare(b.isActive)
    // },

]

export const CONTACT_COUPON_DETAIL_LIST_COLUMNS=[

    {
        title:"Brand Name",
        isSortable: true,
        dataIndex: "brandName",
        key: "brandName",
        sorter: (a, b) => a.brandName.localeCompare(b.brandName)
    },
    // {
    //     title:"Promotion Name",
    //     isSortable: true,
    //     dataIndex: "promotionName",
    //     key: "promotionName",
    //     sorter: (a, b) => a.promotionName.localeCompare(b.promotionName)
    // },
    {
        title:"Discount (Net Amount)",
        isSortable: true,
        dataIndex: "discount",
        key: "discount",
        sorter: (a, b) => a.discount.toString().localeCompare(b.discount.toString())
    },
    {
        title:"Code",
        isSortable: true,
        dataIndex: "code",
        key: "code",
        // sorter: (a, b) => a.code.localeCompare(b.code)
    },
    {
        title:"Start Date",
        isSortable: true,
        dataIndex: "startDate",
        key: "startDate",
        filters: [{
            text: 'Past Week',
            value: true,
        }, {
            text: 'Next Week',
            value: false,
        },
        {
            text: 'This Week',
            value: "1",
        },
        {
            text: 'Today',
            value: "Today",
        },
        ],
        onFilter: (value, record) => {
            return record.createdAtSet === value;
        }
        // sorter: (a, b) => a.startDate.localeCompare(b.startDate)
    },
    {
        title:"End Date",
        isSortable: true,
        dataIndex: "endDate",
        key: "endDate",
        filters: [{
            text: 'Past Week',
            value: true,
        }, {
            text: 'Next Week',
            value: false,
        },
        {
            text: 'This Week',
            value: "1",
        },
        {
            text: 'Today',
            value: "Today",
        },
        ],
        onFilter: (value, record) => {
            return record.endDateSet === value;
        }
        // sorter: (a, b) => a.endDate.localeCompare(b.endDate)
    },
    {
        title:"Redeemed By",
        isSortable: true,
        dataIndex: "redeemedBy",
        key: "redeemedBy",
        // sorter: (a, b) => a.endDate.localeCompare(b.endDate)
    },
    {
        title:"Is Redeemed ?",
        isSortable: true,
        dataIndex: "isRedeemed",
        key: "isRedeemed",
        filters: [{
            text: 'Settled',
            value: true,
        }, {
            text: 'Redeem',
            value: false,
        },
        {
            text: 'Not Yet Redeemed',
            value: "Not Yet Redeemed",
        }
        ],
        align: "center",
        onFilter: (value, record) => {
            return record.isRedeemedSet === value;
        }
        // sorter: (a, b) => a.endDate.localeCompare(b.endDate)
    },
]

export const COUPON_LIST_COLUMNS=[
    {
        title:"Brand Name",
        isSortable: true,
        dataIndex: "brandName",
        key: "brandName",
        sorter: (a, b) => a.brandName.localeCompare(b.brandName)
    },
    {
        title:"Code",
        isSortable: true,
        dataIndex: "code",
        key: "code",
        // sorter: (a, b) => a.code.localeCompare(b.code)
    },
    {
        title:"Discount (Net Amount)",
        isSortable: true,
        dataIndex: "discount",
        key: "discount",
        sorter: (a, b) => a.discount.toString().localeCompare(b.discount.toString())
    },
    {
        title:"Start Date",
        isSortable: true,
        dataIndex: "createdAt",
        key: "createdAt",
        filters: [{
            text: 'Past Week',
            value: true,
        }, {
            text: 'Next Week',
            value: false,
        },
        {
            text: 'This Week',
            value: "1",
        },
        {
            text: 'Today',
            value: "Today",
        },
        ],
        onFilter: (value, record) => {
            return record.createdAtSet === value;
        }
        // sorter: (a, b) => a.startDate.localeCompare(b.startDate)
    },
    {
        title:"End Date",
        isSortable: true,
        dataIndex: "endDate",
        key: "endDate",
        filters: [{
            text: 'Past Week',
            value: true,
        }, {
            text: 'Next Week',
            value: false,
        },
        {
            text: 'This Week',
            value: "1",
        },
        {
            text: 'Today',
            value: "Today",
        },
        ],
        onFilter: (value, record) => {
            return record.endDateSet === value;
        }
        // sorter: (a, b) => a.endDate.localeCompare(b.endDate)
    },
    {
        title:"Redeem By",
        isSortable: true,
        dataIndex: "redeemBy",
        key: "redeemBy",
        sorter: (a, b) => a.redeemBy.localeCompare(b.redeemBy)
    },
    {
        title:"Is Settled?",
        isSortable: true,
        dataIndex: "isRedeemed",
        key: "isRedeemed",
        filters: [{
            text: 'Settled',
            value: true,
        }, {
            text: 'Not Settled',
            value: false,
        }],
        align: "center",
        onFilter: (value, record) => {
            return record.isRedeemedSet === value;
        }
        // sorter: (a, b) => a.isRedeemed.localeCompare(b.isRedeemed)
    },

]

export const RECENT_ACHEIVEMENT_TARGET_LIST = [
    {
        title:"Name",
        isSortable: true,
        dataIndex: "name",
        key: "name",
        sorter: (a, b) => a.name.localeCompare(b.name)
    },
    {
        title: "Status",
        isSortable: false,
        dataIndex: "isUser",
        filters: [{
            text: 'Yes',
            value: true,
        }, {
            text: 'No',
            value: false,
        }],
        key: "isUser",
        align: "center",
        onFilter: (value, record) => {
            return record.isUserSet === value;
        }
    }
]

export const LEAD_PENDING_APPROVAL_TARGET=[
    // {
    //     title:"Team Name",
    //     isSortable: true,
    //     dataIndex: "teamName",
    //     key: "teamName",
    //     sorter: (a, b) => a.teamName.localeCompare(b.teamName)
    // },
    {
        title:"Member Name",
        isSortable: true,
        dataIndex: "memberName",
        key: "memberName",
        sorter: (a, b) => a.memberName.localeCompare(b.memberName)
    },
    {
        title:"Month - Year",
        isSortable: true,
        dataIndex: "tenure",
        key: "tenure",
        // sorter: (a, b) => a.month.localeCompare(b.month)
    },
    // {
    //     title:"Year",
    //     isSortable: true,
    //     dataIndex: "year",
    //     key: "year",
    //     // sorter: (a, b) => a.year.localeCompare(b.year)
    // },
    {
        title:"Requested Quantity",
        isSortable: true,
        dataIndex: "totalQuantity",
        key: "totalQuantity",
        align: "center",
        sorter: (a, b) => a.totalQuantity.toString().localeCompare(b.totalQuantity.toString())
    },
    // {
    //     title:"Pending Quantity",
    //     isSortable: true,
    //     dataIndex: "pendingQuantity",
    //     key: "pendingQuantity",
    //     // sorter: (a, b) => a.pendingQuantity.toString().localeCompare(b.pendingQuantity.toString())
    // },
    {
        title:"Status",
        isSortable: true,
        dataIndex: "status",
        key: "status",
        filters: [{
            text: 'Approved',
            value: true,
        }, {
            text: 'Declined',
            value: false,
        },
        {
            text: 'Pending',
            value: "1",
        }
        ],
        align: "center",
        onFilter: (value, record) => {
            return record.statusSet === value;
        }
    },
]

export const PENDING_APPROVAL_TARGET=[
    {
        title:"Team Name",
        isSortable: true,
        dataIndex: "teamName",
        key: "teamName",
        sorter: (a, b) => a.teamName.localeCompare(b.teamName)
    },
    {
        title:"Member Name",
        isSortable: true,
        dataIndex: "memberName",
        key: "memberName",
        sorter: (a, b) => a.memberName.localeCompare(b.memberName)
    },
    {
        title:"Month - Year",
        isSortable: true,
        dataIndex: "tenure",
        key: "tenure",
        // sorter: (a, b) => a.month.localeCompare(b.month)
    },
    // {
    //     title:"Year",
    //     isSortable: true,
    //     dataIndex: "year",
    //     key: "year",
    //     // sorter: (a, b) => a.year.localeCompare(b.year)
    // },
    {
        title:"Requested Quantity",
        isSortable: true,
        dataIndex: "totalQuantity",
        key: "totalQuantity",
        sorter: (a, b) => a.totalQuantity.toString().localeCompare(b.totalQuantity.toString())
    },
    // {
    //     title:"Pending Quantity",
    //     isSortable: true,
    //     dataIndex: "pendingQuantity",
    //     key: "pendingQuantity",
    //     // sorter: (a, b) => a.pendingQuantity.toString().localeCompare(b.pendingQuantity.toString())
    // },
    {
        title:"Action",
        isSortable: true,
        dataIndex: "status",
        key: "status",
        filters: [{
            text: 'Approved',
            value: true,
        }, {
            text: 'Declined',
            value: false,
        },
        {
            text: 'Pending',
            value: "1",
        }
        ],
        align: "center",
        onFilter: (value, record) => {
            return record.statusSet === value;
        }
    },
]

export const PENDING_APPROVAL_GWP=[

    {
        title:"Team Name",
        isSortable: true,
        dataIndex: "teamName",
        key: "teamName",
        sorter: (a, b) => a.teamName.localeCompare(b.teamName)
    },
    {
        title:"Member Name",
        isSortable: true,
        dataIndex: "memberName",
        key: "memberName",
        sorter: (a, b) => a.memberName.localeCompare(b.memberName)
    },
    {
        title:"Gwp Promotion Name",
        isSortable: true,
        dataIndex: "gwpPromotionName",
        key: "gwpPromotionName",
        // sorter: (a, b) => a.gwpPromotionName.localeCompare(b.gwpPromotionName)
    },
    {
        title:"Requested Quantity",
        isSortable: true,
        dataIndex: "totalQuantity",
        key: "totalQuantity",
        sorter: (a, b) => a.totalQuantity.toString().localeCompare(b.totalQuantity.toString())
    },
    // {
    //     title:"Pending Quantity",
    //     isSortable: true,
    //     dataIndex: "pendingQuantity",
    //     key: "pendingQuantity",
    //     sorter: (a, b) => a.pendingQuantity.toString().localeCompare(b.pendingQuantity.toString())
    // },
    {
        title:"Action",
        isSortable: true,
        dataIndex: "status",
        key: "status",
        filters: [{
            text: 'Approved',
            value: true,
        }, {
            text: 'Declined',
            value: false,
        },
        {
            text: 'Pending',
            value: "1",
        }
        ],
        align: "center",
        onFilter: (value, record) => {
            return record.statusSet === value;
        }
    },

]

export const LEAD_PENDING_APPROVAL_GWP = [

    // {
    //     title:"Team Name",
    //     isSortable: true,
    //     dataIndex: "teamName",
    //     key: "teamName",
    //     sorter: (a, b) => a.teamName.localeCompare(b.teamName)
    // },
    {
        title:"Member Name",
        isSortable: true,
        dataIndex: "memberName",
        key: "memberName",
        sorter: (a, b) => a.memberName.localeCompare(b.memberName)
    },
    {
        title:"Gwp Promotion Name",
        isSortable: true,
        dataIndex: "gwpPromotionName",
        key: "gwpPromotionName",
        // sorter: (a, b) => a.gwpPromotionName.localeCompare(b.gwpPromotionName)
    },
    {
        title:"Requested Quantity",
        isSortable: true,
        dataIndex: "totalQuantity",
        key: "totalQuantity",
        sorter: (a, b) => a.totalQuantity.toString().localeCompare(b.totalQuantity.toString())
    },
    // {
    //     title:"Pending Quantity",
    //     isSortable: true,
    //     dataIndex: "pendingQuantity",
    //     key: "pendingQuantity",
    //     sorter: (a, b) => a.pendingQuantity.toString().localeCompare(b.pendingQuantity.toString())
    // },
    {
        title:"Status",
        isSortable: true,
        dataIndex: "status",
        key: "status",
        filters: [{
            text: 'Approved',
            value: true,
        }, {
            text: 'Declined',
            value: false,
        },
        {
            text: 'Pending',
            value: "1",
        }
        ],
        align: "center",
        onFilter: (value, record) => {
            return record.statusSet === value;
        }
    },

]

export const LEAD_PENDING_APPROVAL_SK=[

    // {
    //     title:"Team Name",
    //     isSortable: true,
    //     dataIndex: "teamName",
    //     key: "teamName",
    //     sorter: (a, b) => a.teamName.localeCompare(b.teamName)
    // },
    {
        title:"Member Name",
        isSortable: true,
        dataIndex: "memberName",
        key: "memberName",
        sorter: (a, b) => a.memberName.localeCompare(b.memberName)
    },
    {
        title:"Starter Kit Name",
        isSortable: true,
        dataIndex: "starterKitName",
        key: "starterKitName",
        // sorter: (a, b) => a.memberName.localeCompare(b.memberName)
    },
    {
        title:"Requested Quantity",
        isSortable: true,
        dataIndex: "totalQuantity",
        key: "totalQuantity",
        sorter: (a, b) => a.totalQuantity.toString().localeCompare(b.totalQuantity.toString())
    },
    // {
    //     title:"Pending Quantity",
    //     isSortable: true,
    //     dataIndex: "pendingQuantity",
    //     key: "pendingQuantity",
    //     sorter: (a, b) => a.pendingQuantity.toString().localeCompare(b.pendingQuantity.toString())
    // },
    {
        title:"Status",
        isSortable: true,
        dataIndex: "status",
        key: "status",
        filters: [{
            text: 'Approved',
            value: true,
        }, {
            text: 'Declined',
            value: false,
        },
        {
            text: 'Pending',
            value: "1",
        }
        ],
        align: "center",
        onFilter: (value, record) => {
            return record.statusSet === value;
        }
    },
    
]

export const PENDING_APPROVAL_SK=[

    {
        title:"Team Name",
        isSortable: true,
        dataIndex: "teamName",
        key: "teamName",
        sorter: (a, b) => a.teamName.localeCompare(b.teamName)
    },
    {
        title:"Member Name",
        isSortable: true,
        dataIndex: "memberName",
        key: "memberName",
        sorter: (a, b) => a.memberName.localeCompare(b.memberName)
    },
    {
        title:"Starter Kit Name",
        isSortable: true,
        dataIndex: "starterKitName",
        key: "starterKitName",
        // sorter: (a, b) => a.memberName.localeCompare(b.memberName)
    },
    {
        title:"Requested Quantity",
        isSortable: true,
        dataIndex: "totalQuantity",
        key: "totalQuantity",
        sorter: (a, b) => a.totalQuantity.toString().localeCompare(b.totalQuantity.toString())
    },
    // {
    //     title:"Pending Quantity",
    //     isSortable: true,
    //     dataIndex: "pendingQuantity",
    //     key: "pendingQuantity",
    //     sorter: (a, b) => a.pendingQuantity.toString().localeCompare(b.pendingQuantity.toString())
    // },
    {
        title:"Action",
        isSortable: true,
        dataIndex: "status",
        key: "status",
        filters: [{
            text: 'Approved',
            value: true,
        }, {
            text: 'Declined',
            value: false,
        },
        {
            text: 'Pending',
            value: "1",
        }
        ],
        align: "center",
        onFilter: (value, record) => {
            return record.statusSet === value;
        }
    },
    
]

export const TEAM_TARGET_COLUMNS=[
    {
        title:"Month - Year",
        isSortable: true,
        dataIndex: "displayTenure",
        key: "displayTenure",
        sorter: (a, b) => a.displayTenure.localeCompare(b.displayTenure)
    },
    {
        title: "Assigned Targets",
        isSortable: true,
        dataIndex:"totalQuantity",
        key: "totalQuantity",
        sorter: (a, b) => a.totalQuantity.toString().localeCompare(b.totalQuantity.toString())
    },
    {
        title: "Targets to Members",
        isSortable: true,
        dataIndex: "achieved_target",
        key: "achieved_target",
        sorter: (a, b) => a.achieved_target.toString().localeCompare(b.achieved_target.toString())
    },
    {
        title: "Pending Targets",
        isSortable: true,
        dataIndex: "balance_qty",
        key: "balance_qty",
        sorter: (a, b) => a.balance_qty.toString().localeCompare(b.balance_qty.toString())
    },
    
    // {
    //     title:"Month",
    //     isSortable: true,
    //     dataIndex: "month",
    //     key: "month",
    //     sorter: (a, b) => a.month.localeCompare(b.month)
    // },
    // {
    //     title:"Year",
    //     isSortable: true,
    //     dataIndex: "Year",
    //     key: "Year",
        
    // },
   

]

   
