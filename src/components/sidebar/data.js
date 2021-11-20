import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import DescriptionIcon from '@mui/icons-material/Description';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

const sideBarData =  [
    {
        "display_name": "Tra cước tờ khai",
        "route": "/customsDeclarationFee",
        "icon": <AttachMoneyIcon fontSize="small" sx={{mr: 2}}/> 
    },
    {
        "display_name": "Tra cứu tờ khai",
        "route": "/customsDeclarationInfo",
        "icon": <DescriptionIcon fontSize="small" sx={{mr: 2}}/>
    },
    {
        "display_name": "Hóa đơn VAT",
        "route": "/vat",
        "icon": <CreditScoreIcon fontSize="small" sx={{mr: 2}}/>
    },
    {
        "display_name": "Theo dõi đơn hàng",
        "route": "/orders",
        "icon": <LocalShippingIcon fontSize="small" sx={{mr: 2}}/>
    }
];

export {sideBarData};
