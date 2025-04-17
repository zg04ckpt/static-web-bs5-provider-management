const providers = [
  {
      id: '#PRO100002',
      name: 'Công ty CP TechZone',
      status: 'Chưa hợp tác',
      serviceId: 'SE123005', // Internet & mạng nội bộ
      createdAt: '2022-11-20T09:15:00Z',
      updatedAt: '2024-08-05T16:20:00Z',
      taxCode: '0312345678',
      address: '456 Lê Lợi, Quận 1, TP.HCM',
      email: 'info@techzone.vn',
      website: 'https://techzone.vn',
      phone: '0912345678'
    },
    {
      id: '#PRO100003',
      name: 'Công ty TNHH Minh Phúc',
      status: 'Đang hợp tác',
      serviceId: 'SE123007', // Sửa chữa thiết bị
      createdAt: '2023-03-10T13:45:00Z',
      updatedAt: '2025-01-15T11:00:00Z',
      taxCode: '0501234567',
      address: '789 Trần Hưng Đạo, Hải Châu, Đà Nẵng',
      email: 'support@minhphuc.com',
      website: '',
      phone: '0935123456'
    },
    {
      id: '#PRO100004',
      name: 'Công ty CP Thực Phẩm Xanh',
      status: 'Đang hợp tác',
      serviceId: 'SE123009', // Căng tin
      createdAt: '2022-09-05T08:30:00Z',
      updatedAt: '2024-11-20T10:10:00Z',
      taxCode: '0102345678',
      address: '321 Nguyễn Trãi, Thanh Xuân, Hà Nội',
      email: 'contact@thucphamxanh.vn',
      website: 'https://thucphamxanh.vn',
      phone: '0978123456'
    },
    {
      id: '#PRO100005',
      name: 'Công ty TNHH Ánh Dương',
      status: 'Ngừng hợp tác',
      serviceId: 'SE123003', // Vệ sinh
      createdAt: '2022-07-12T11:20:00Z',
      updatedAt: '2023-10-25T15:00:00Z',
      taxCode: '0313456789',
      address: '654 Phạm Văn Đồng, Thủ Đức, TP.HCM',
      email: 'info@anhduong.com',
      website: '',
      phone: '0909123456'
    },
    {
      id: '#PRO100006',
      name: 'Công ty CP Dịch Vụ An Ninh',
      status: 'Đang hợp tác',
      serviceId: 'SE123004', // Bảo vệ
      createdAt: '2023-01-25T14:00:00Z',
      updatedAt: '2024-12-01T09:45:00Z',
      taxCode: '0103456789',
      address: '147 Hai Bà Trưng, Hoàn Kiếm, Hà Nội',
      email: 'contact@anninh.vn',
      website: 'https://anninh.vn',
      phone: '0945123456'
    },
    {
      id: '#PRO100007',
      name: 'Công ty TNHH Năng Lượng Mới',
      status: 'Đang hợp tác',
      serviceId: 'SE123001', // Điện tổng hợp
      createdAt: '2022-12-01T10:30:00Z',
      updatedAt: '2025-02-10T12:15:00Z',
      taxCode: '0502345678',
      address: '258 Nguyễn Văn Cừ, Long Biên, Hà Nội',
      email: 'support@nangluongmoi.com',
      website: 'https://nangluongmoi.com',
      phone: '0967123456'
    },
    {
      id: '#PRO100008',
      name: 'Công ty CP Thiết Bị Y Tế Sài Gòn',
      status: 'Đang hợp tác',
      serviceId: 'SE123007', // Sửa chữa thiết bị
      createdAt: '2023-04-18T09:00:00Z',
      updatedAt: '2024-10-15T13:25:00Z',
      taxCode: '0314567890',
      address: '369 Lê Văn Sỹ, Quận 3, TP.HCM',
      email: 'info@yte Saigon.vn',
      website: 'https://ytesaigon.vn',
      phone: '0923123456'
    },
    {
      id: '#PRO100010',
      name: 'Công ty CP Viễn Thông Toàn Cầu',
      status: 'Đang hợp tác',
      serviceId: 'SE123005', // Internet & mạng
      createdAt: '2023-02-14T15:10:00Z',
      updatedAt: '2024-11-05T11:30:00Z',
      taxCode: '0315678901',
      address: '741 Nguyễn Huệ, Quận 1, TP.HCM',
      email: 'support@vienthong.vn',
      website: 'https://vienthong.vn',
      phone: '0901123456'
    },
    {
      id: '#PRO100011',
      name: 'Công ty TNHH Xây Dựng Hòa Bình',
      status: 'Đang hợp tác',
      serviceId: 'SE123004', // Bảo vệ
      createdAt: '2022-10-30T08:20:00Z',
      updatedAt: '2025-01-20T14:00:00Z',
      taxCode: '0503456789',
      address: '963 Lý Thường Kiệt, Hải Châu, Đà Nẵng',
      email: 'info@hoabinh.com',
      website: 'https://hoabinh.com',
      phone: '0933123456'
    },
    {
      id: '#PRO100012',
      name: 'Công ty CP Phần Mềm SmartSoft',
      status: 'Chưa hợp tác',
      serviceId: 'SE123005', // CNTT → Internet
      createdAt: '2023-05-09T11:00:00Z',
      updatedAt: '2024-09-15T16:40:00Z',
      taxCode: '0105678901',
      address: '159 Đê La Thành, Đống Đa, Hà Nội',
      email: 'contact@smartsoft.vn',
      website: 'https://smartsoft.vn',
      phone: '0971123456'
    },
    {
      id: '#PRO100014',
      name: 'Công ty CP Nông Nghiệp Hữu Cơ',
      status: 'Đang hợp tác',
      serviceId: 'SE123009', // Căng tin
      createdAt: '2023-07-01T13:30:00Z',
      updatedAt: '2025-03-01T09:15:00Z',
      taxCode: '0504567890',
      address: '753 Lê Hồng Phong, Hải Châu, Đà Nẵng',
      email: 'contact@huuco.vn',
      website: 'https://huuco.vn',
      phone: '0921123456'
    },
    {
      id: '#PRO100015',
      name: 'Công ty TNHH Truyền Thông Midea',
      status: 'Ngừng hợp tác',
      serviceId: 'SE123005', // Mạng
      createdAt: '2022-04-15T10:40:00Z',
      updatedAt: '2023-12-10T14:50:00Z',
      taxCode: '0106789012',
      address: '321 Kim Mã, Ba Đình, Hà Nội',
      email: 'info@midea.vn',
      website: '',
      phone: '0961123456'
    },
    {
      id: '#PRO100016',
      name: 'Công ty CP Nước Sạch Thủ Đô',
      status: 'Đang hợp tác',
      serviceId: 'SE123002', // Cấp nước
      createdAt: '2023-08-10T12:00:00Z',
      updatedAt: '2024-11-25T15:30:00Z',
      taxCode: '0317890123',
      address: '147 Giải Phóng, Hai Bà Trưng, Hà Nội',
      email: 'support@nuocsach.vn',
      website: 'https://nuocsach.vn',
      phone: '0983123456'
    },
    {
      id: '#PRO100017',
      name: 'Công ty TNHH Điện Máy Hồng Hà',
      status: 'Đang hợp tác',
      serviceId: 'SE123007', // Sửa chữa thiết bị
      createdAt: '2022-05-20T14:20:00Z',
      updatedAt: '2024-10-05T11:10:00Z',
      taxCode: '0505678901',
      address: '258 Âu Cơ, Tây Hồ, Hà Nội',
      email: 'contact@hongha.com',
      website: '',
      phone: '0911123456'
    },
    {
      id: '#PRO100019',
      name: 'Công ty TNHH Công Nghệ Hưng Thịnh',
      status: 'Đang hợp tác',
      serviceId: 'SE123007', // Sửa chữa + CNTT
      createdAt: '2022-03-30T10:15:00Z',
      updatedAt: '2025-02-15T12:00:00Z',
      taxCode: '0318901234',
      address: '741 Võ Văn Kiệt, Quận 5, TP.HCM',
      email: 'support@hungthinh.com',
      website: 'https://hungthinh.com',
      phone: '0943123456'
    }
];

const services = [
  {
      "id": "SE123001",
      "name": "Dịch vụ điện tổng hợp",
      "description": "Cung cấp nguồn điện cho các tòa nhà cao tầng",
      "createdAt": "2023-08-12T08:00:00",
      "updatedAt": "2023-12-01T10:15:00",
      "status": "Đã kí hợp đồng",
      "unit": "kWh",
      "unitDesc": "Số điện"
  },
  {
      "id": "SE123002",
      "name": "Dịch vụ cấp nước sinh hoạt",
      "description": "Đảm bảo nước sạch cho ký túc xá và giảng đường",
      "createdAt": "2023-06-05T09:30:00",
      "updatedAt": "2023-11-21T11:45:00",
      "status": "Đã kí hợp đồng",
      "unit": "m³",
      "unitDesc": "Số khối nước"
  },
  {
      "id": "SE123003",
      "name": "Dịch vụ vệ sinh",
      "description": "Làm sạch khu vực học tập và hành lang",
      "createdAt": "2023-04-18T07:00:00",
      "updatedAt": "2023-10-15T08:20:00",
      "status": "Đã kí hợp đồng",
      "unit": "m²",
      "unitDesc": "Số mét vuông"
  },
  {
      "id": "SE123004",
      "name": "Dịch vụ bảo vệ",
      "description": "Bảo vệ an ninh tại các tòa nhà và khuôn viên",
      "createdAt": "2023-01-20T06:30:00",
      "updatedAt": "2023-09-10T13:00:00",
      "status": "Đã kí hợp đồng",
      "unit": "Người/giờ",
      "unitDesc": "Số người x giờ làm việc"
  },
  {
      "id": "SE123005",
      "name": "Dịch vụ Internet và mạng nội bộ",
      "description": "Cung cấp kết nối internet và mạng LAN",
      "createdAt": "2022-12-01T08:45:00",
      "updatedAt": "2023-08-22T09:10:00",
      "status": "Đã kí hợp đồng",
      "unit": "Tháng",
      "unitDesc": "Tháng sử dụng"
  },
  {
      "id": "SE123007",
      "name": "Dịch vụ sửa chữa thiết bị",
      "description": "Bảo dưỡng, sửa chữa máy móc, thiết bị dạy học",
      "createdAt": "2023-05-15T12:00:00",
      "updatedAt": "2023-07-25T14:00:00",
      "status": "Đã kí hợp đồng",
      "unit": "Tháng",
      "unitDesc": "Tháng cung cấp"
  },
  {
      "id": "SE123008",
      "name": "Dịch vụ chăm sóc cây cảnh",
      "description": "Bảo trì, chăm sóc cảnh quan sân vườn",
      "createdAt": "2023-02-01T07:30:00",
      "updatedAt": "2023-06-30T08:00:00",
      "status": "Đã kí hợp đồng",
      "unit": "m²",
      "unitDesc": "Số mét vuông"
  },
  {
      "id": "SE123009",
      "name": "Dịch vụ căng tin",
      "description": "Phục vụ suất ăn cho sinh viên và giảng viên",
      "createdAt": "2023-04-02T09:15:00",
      "updatedAt": "2023-06-15T10:00:00",
      "status": "Chưa kí hợp đồng",
      "unit": "suất",
      "unitDesc": "Số suất cơm cung cấp"
  },
  {
      "id": "SE123010",
      "name": "Dịch vụ thu gom rác thải",
      "description": "Thu gom và xử lý rác thải hàng ngày",
      "createdAt": "2022-11-25T06:00:00",
      "updatedAt": "2023-05-18T07:00:00",
      "status": "Chưa kí hợp đồng",
      "unit": "tấn",
      "unitDesc": "Số tấn rác được xử lý"
  }
];

const serviceStatus = [
    "Đã kí hợp đồng",
    "Chưa kí hợp đồng"
];

const providerStatus = [
    "Đang hợp tác",
    "Chưa hợp tác"
];
  
