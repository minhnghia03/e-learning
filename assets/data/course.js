export const categories = [
  {
    id: 1,
    name: 'Toán',
  },
  {
    id: 2,
    name: 'Vật lý',
  },
  {
    id: 3,
    name: 'Hóa học',
  },
  {
    id: 4,
    name: 'Sinh học',
  },
  {
    id: 5,
    name: 'Ngữ văn',
  },
  {
    id: 6,
    name: 'Lịch sử',
  },
  {
    id: 7,
    name: 'Địa lý',
  },
  {
    id: 8,
    name: 'Tiếng Anh',
  },
  {
    id: 9,
    name: 'Tin học',
  },
];

export const courses = [
  {
    id: 1,
    name: 'Toán',
    categoryId: 1,
    title: 'Toán học cơ bản',
    description: 'Toán học cơ bản là môn học quan trọng trong chương trình giáo dục phổ thông.',
    thumbnail: 'https://via.placeholder.com/150',
    chapters: [
      {
        id: 1,
        title: 'Chương 1: Số học',
        description: 'Giới thiệu về các khái niệm cơ bản trong số học.',
        type: 'text',
        content: `Số học là một nhánh của toán học nghiên cứu về các số và các phép toán cơ bản như cộng, trừ, nhân, chia. Các khái niệm quan trọng bao gồm:

1. Số tự nhiên: 0, 1, 2, 3, ...
2. Số nguyên: ..., -2, -1, 0, 1, 2, ...
3. Số hữu tỉ: Các số có thể biểu diễn dưới dạng phân số
4. Số thực: Bao gồm cả số hữu tỉ và số vô tỉ

Các phép toán cơ bản:
- Phép cộng: a + b
- Phép trừ: a - b
- Phép nhân: a × b
- Phép chia: a ÷ b

Các tính chất quan trọng:
- Tính giao hoán: a + b = b + a
- Tính kết hợp: (a + b) + c = a + (b + c)
- Tính phân phối: a × (b + c) = a × b + a × c`,
      },
      {
        id: 2,
        title: 'Chương 2',
        description: 'Chương 2 là môn học quan trọng trong chương trình giáo dục phổ thông.',
        type: 'video',
        content: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      },
    ],
  },
  {
    id: 2,
    name: 'Vật lý',
    categoryId: 2,
    title: 'Vật lý đại cương',
    description: 'Vật lý đại cương giúp học sinh hiểu về các quy luật cơ bản của tự nhiên.',
    thumbnail: 'https://via.placeholder.com/150',
    chapters: [
      {
        id: 1,
        title: 'Chương 1: Động học',
        description: 'Giới thiệu về chuyển động của vật thể.',
        type: 'text',
        content: `Động học là một phần quan trọng của vật lý học, nghiên cứu về chuyển động của vật thể mà không quan tâm đến nguyên nhân gây ra chuyển động. Các khái niệm cơ bản bao gồm:

1. Vị trí và độ dịch chuyển:
- Vị trí: Điểm xác định vị trí của vật trong không gian
- Độ dịch chuyển: Sự thay đổi vị trí của vật

2. Vận tốc và gia tốc:
- Vận tốc: Tốc độ thay đổi vị trí theo thời gian
- Gia tốc: Tốc độ thay đổi vận tốc theo thời gian

3. Các loại chuyển động:
- Chuyển động thẳng đều
- Chuyển động thẳng biến đổi đều
- Chuyển động tròn đều

Công thức cơ bản:
- Vận tốc trung bình: v = Δx/Δt
- Gia tốc trung bình: a = Δv/Δt
- Phương trình chuyển động: x = x₀ + v₀t + ½at²`,
      },
      {
        id: 2,
        title: 'Chương 2: Động lực học',
        description: 'Tìm hiểu về lực và ảnh hưởng của nó đến chuyển động.',
        type: 'video',
        content: 'https://www.youtube.com/watch?v=example1',
      },
    ],
  },
  {
    id: 3,
    name: 'Hóa học',
    categoryId: 3,
    title: 'Hóa học cơ sở',
    description: 'Hóa học cơ sở giúp học sinh hiểu về cấu tạo và tính chất của vật chất.',
    thumbnail: 'https://via.placeholder.com/150',
    chapters: [
      {
        id: 1,
        title: 'Chương 1: Cấu tạo nguyên tử',
        description: 'Tìm hiểu về cấu trúc cơ bản của nguyên tử.',
        type: 'text',
        content: `Nguyên tử là đơn vị cơ bản của vật chất, có cấu tạo gồm:

1. Hạt nhân:
- Proton: Mang điện tích dương (+1)
- Neutron: Không mang điện tích
- Khối lượng hạt nhân chiếm hầu hết khối lượng nguyên tử

2. Lớp vỏ electron:
- Electron: Mang điện tích âm (-1)
- Chuyển động xung quanh hạt nhân
- Sắp xếp thành các lớp và phân lớp

3. Các đặc điểm quan trọng:
- Số hiệu nguyên tử (Z): Số proton trong hạt nhân
- Số khối (A): Tổng số proton và neutron
- Đồng vị: Các nguyên tử cùng nguyên tố nhưng khác số neutron

4. Mô hình nguyên tử:
- Mô hình Rutherford
- Mô hình Bohr
- Mô hình hiện đại (mô hình lượng tử)`,
      },
      {
        id: 2,
        title: 'Chương 2: Liên kết hóa học',
        description: 'Khám phá cách các nguyên tử liên kết với nhau.',
        type: 'video',
        content: 'https://www.youtube.com/watch?v=example2',
      },
    ],
  },
  {
    id: 4,
    name: 'Sinh học',
    categoryId: 4,
    title: 'Sinh học đại cương',
    description: 'Sinh học đại cương giúp học sinh hiểu về sự sống và các quá trình sinh học.',
    thumbnail: 'https://via.placeholder.com/150',
    chapters: [
      {
        id: 1,
        title: 'Chương 1: Tế bào học',
        description: 'Giới thiệu về cấu trúc và chức năng của tế bào.',
        type: 'text',
        content: `Tế bào là đơn vị cơ bản của sự sống, có cấu tạo phức tạp và đa dạng:

1. Cấu trúc tế bào:
- Màng tế bào: Bao bọc và bảo vệ tế bào
- Tế bào chất: Chứa các bào quan
- Nhân tế bào: Chứa vật chất di truyền

2. Các bào quan chính:
- Ti thể: Sản xuất năng lượng (ATP)
- Lưới nội chất: Tổng hợp protein và lipid
- Bộ máy Golgi: Đóng gói và vận chuyển protein
- Lysosome: Tiêu hóa các chất
- Ribosome: Tổng hợp protein

3. Chức năng tế bào:
- Trao đổi chất
- Sinh sản
- Phản ứng với môi trường
- Tăng trưởng và phát triển

4. Phân loại tế bào:
- Tế bào nhân sơ (Prokaryote)
- Tế bào nhân thực (Eukaryote)`,
      },
      {
        id: 2,
        title: 'Chương 2: Di truyền học',
        description: 'Tìm hiểu về cơ chế di truyền và biến dị.',
        type: 'video',
        content: 'https://www.youtube.com/watch?v=example3',
      },
    ],
  },
];
