
const quiz =[
    {
        q:'Quê của Bác là ở đâu?',
        option: ['Hà Nội','Hải Phòng','Nam Định','Nghệ An'],
        answer:3
    },
    {
        q:'Cha Bác Hồ là ai?',
        option: ['Hoàng Thị Loan','Phan Bội Châu','Nguyễn Sinh Sắc','Nguyễn Sinh Nhậm'],
        answer:2
    },
    {
        q:'Chọn đáp án đúng về phong cách ăn mặc của Bác:?',
        option: ['Trẻ trung, năng động','Mộc mạc ,giản dị','SA hoa lộng lẫy','tất cả đều sai'],
        answer:1
    },
    {
        q:'Theo Hồ Chí Minh: cách mạng giải phóng dân tộc, không??',
        option: ['Đi theo con đường tổ tiên Việt Nam','Đi theo cách mạng Minh Trị','Đi theo đường lối tư bản châu âu','Đi theo cách mạng chủ nghĩa'],
        answer:3
    },
    {
        q:'Nguyễn Tất Thành dạy học ở trường nào trước khi ra đi tìm đường cứu nước?',
        option: ['Trường tiểu học Pháp Việt ở Vinh.','Trường tiểu học Đông Ba ở Huế','Trường Quốc học Huế.','Trường Dục Thanh ở Phan Thiết'],
        answer:3
    },
    {
        q:'Nguyễn Tất Thành đặt chân đầu tiên trên đất Pháp ở đâu?',
        option: ['Nhãn hiệu xây dựng','Le Havre','Ăn măng nào','Thủ đô Paris'],
        answer:0
    },
    {
        q:'Quá trình hình thành và phát triển tư tưởng Hồ Chí Minh là giai đoạn nào? thời kỳ tìm đường cứu nước, giải phóng dân tộc?',
        option: ['1908-1911','1911-1920','1921-1930','1930-1945'],
        answer:1
    },
    {
        q:'Nguyễn Tất Thành tham gia Đảng xã hội Pháp vào năm nào?',
        option: ['Đầu năm 1917','Đầu năm 1918','Đầu năm 1919','Đầu năm 1920'],
        answer:2
    },
    {
        q:'Theo Hồ Chí Minh, ưu điểm lớn nhất của học thuyết Nho giáo là gì?',
        option: ['Thích học hỏi.','Thích quản lỹ xã hội thông qua đạo đức','Sự hình thành đạo đức cá nhân.','thúc đẩy văn hóa lễ nghi'],
        answer:2
    },
    {
        q:'Sự kiện nào đánh dấu sự xuất hiện của tên tuổi Nguyễn Ái Quốc trên trường quốc tế?',
        option: ['Nguyễn Ái Quốc gửi yêu sách đến Hội nghị Versailles (18/6/1919).',
        'Nguyễn Ái Quốc tham gia thành lập Đảng Cộng sản Pháp (12/1920).','Nguyễn Ái Quốc viết tác phẩm Đường Cách Mệnh'
        ,'Nguyễn Ái Quốc tham gia Đại hội Đảng xã hội Pháp.'],
        answer:0
    },
    {
        q:'Năm 1919, Nguyễn Tất Thành tham gia Đảng xã hội Pháp vì lý tưởng của mình',
        option: ['Tự do, Bình đẳng, Bác ái','Độc lập, Hòa bình, Bác Ái','Bình đẳng, Tự do, Độc lập','Độc lập, nhân quyền, dân quyền'],
        answer:0
    },
    {
        q:'Văn bản nào được Nguyễn Ái Quốc coi là “cẩm nang thần kỳ” cho sự nghiệp giải phóng dân tộc?',
        option: ['Luận cương của Lê-nin về dân tộc và thuộc địa','Tuyên ngôn của Đảng Cộng sản Karx Mark','Chủ nghĩa tư bản của Karx Mark'
        ,'Luận văn tháng Tư của Lenin'],
        answer:0
    },
    {
        q:'Nguyễn Ái Quốc trình bày lập trường, quan điểm về vị trí chiến lược của cách mạng các nước thuộc địa bằng cách:?',
        option: ['Hội nghị Quốc tế Nông dân ở Mátxcơva.','Đại hội cộng sản quốc tế lần thứ 5 (1924)','Đại hội Tua của Đảng Xã hội Pháp'
        ,' Đại hội Quốc tế Nông dân'],
        answer:1
    },
    {
        q:'Sự kiện nào được Nguyễn Ái Quốc đánh giá: “Như chim én báo hiệu mùa xuân về”?',
        option: ['Cách mạng Tháng Mười Nga bùng nổ và thắng lợi','Sự thành lập Đảng Cộng sản Pháp',
        'Vụ ám sát Toàn quyền Mechlan của Phạm Hồng Thái','Sự thành lập Hội Việt Nam Cách mạng Thanh niên'],
        answer:2
    },
    {
        q:'hãy cho biết Nguyễn Ái Quốc không Bạn đã tham gia tổ chức chính trị nào sau đây??',
        option: ['Hội những người yêu nước Việt Nam','Đảng xã hội Pháp','Đảng cộng sản Pháp','liên minh thuộc địa'],
        answer:1
    },
    {
        q:'Vì sao Nguyễn Ái Quốc bầu chọn Quốc tế thứ ba?',
        option: ['Quốc tế này bảo vệ lợi ích của các nước thuộc địa','Quốc tế này giúp nhân dân ta chống Pháp',
        'Quốc tế này đã mở đường cho cách mạng Việt Nam','Quốc tế này chủ trương thành lập mặt trận giải phóng dân tộc Việt Nam'],
        answer:0
    },
    {
        q:'Ở Liên Xô 1923 – 1924, Nguyễn Ái Quốc viết bài cho:?',
        option: ['Báo nhân dân, báo sự thật.','cuộc sống lao động.','Đánh giá thư tín quốc tế, tạp chí Vérité.','Đời sống lao động, tạp chí thư tín quốc tế.'],
        answer:2
    },
    {
        q:'Vai trò của Nguyễn Ái Quốc trong Hội nghị hợp nhất Ba tổ chức cộng sản có đại diện như thế nào (3/2/1930)?',
        option: ['Hợp nhất các tổ chức cộng sản để thành lập một đảng duy nhất lấy tên là Đảng Cộng sản Việt Nam.'
        ,'Bản thảo Cương lĩnh chính trị đầu tiên được Hội nghị thông qua.',
        'Truyền bá chủ nghĩa Mác Lê-nin ở Việt Nam.','cả A và B đều đúng'],
        answer:3
    },
    {
        q:'Cuốn sách tập hợp những bài giảng của Nguyễn Ái Quốc tại lớp huấn luyện chính trị ở Quảng Châu (Trung Quốc ) là:',
        option: ['con rồng tre','Bản án chế độ thực dân Pháp','Đường cách mệnh','cả 3 cuốn trên'],
        answer:2
    },
    {
        q:'Từ nhỏ Hồ Chí Minh đã nhận thấy đặc điểm gì của triều đình nhà Nguyễn?',
        option: ['Ươn hèn, nhu nhược ','Phản bội ','Cấu kết với thực dân Pháp ','Cả 3 phương án trên '],
        answer:3
    },


]