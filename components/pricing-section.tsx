'use client';

import React from 'react';
import { useLanguage } from '@/context/language-context';

const PricingCard = ({
  title,
  price,
  features,
}: {
  title: string;
  price: string;
  features: { label: string; items: string[] }[];
}) => {
  return (
    <div className='border-2 border-gray-200 rounded-lg p-8 bg-white hover:shadow-lg transition-shadow'>
      <h3 className='text-2xl font-bold text-blue-600 mb-6'>{title}</h3>
      <div className='mb-6'>
        <p className='text-3xl font-bold text-green-600'>{price}</p>
      </div>

      <div className='space-y-4'>
        {features.map((feature, idx) => (
          <div key={idx}>
            <p className='font-semibold text-gray-800 mb-2'>{feature.label}</p>
            <ul className='space-y-1 ml-4'>
              {feature.items.map((item, itemIdx) => (
                <li
                  key={itemIdx}
                  className='text-gray-700 text-sm flex items-start'
                >
                  <span className='mr-2'>•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

interface IPricingItem {
  title: string;
  subtitle: string;
  description: string;
  tabs: {
    name: string;
    descriptions?: string[];
    cards: {
      title: string;
      price: string;
      features: {
        label: string;
        items: string[];
      }[];
    }[];
  }[];
}

interface IPricingData {
  en: IPricingItem;
  vi: IPricingItem;
}

export default function PricingSection() {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = React.useState(0);

  const pricingData: IPricingData = {
    en: {
      title: 'Pricing Services',
      subtitle: 'Choose the Perfect Package for Your Needs',
      description:
        'Our comprehensive packages are designed to meet different photography needs. Each package includes professional shooting, editing, and digital delivery.',
      tabs: [
        {
          name: 'Portrait Outdoor',
          cards: [
            {
              title: 'Basic Portrait',
              price: '2,000,000 VND',
              features: [
                {
                  label: 'Package Includes:',
                  items: [
                    'Up to 45 minutes outdoor session',
                    '1 location',
                    'Professional editing',
                    '30+ edited digital photos',
                  ],
                },
                {
                  label: 'Setup Time:',
                  items: ['10 minutes'],
                },
              ],
            },
            {
              title: 'Standard Portrait',
              price: '2,500,000 VND',
              features: [
                {
                  label: 'Package Includes:',
                  items: [
                    'Up to 60 minutes outdoor session',
                    '1 location',
                    'Professional editing and retouching',
                    '50+ edited digital photos',
                  ],
                },
                {
                  label: 'Setup Time:',
                  items: ['15 minutes'],
                },
              ],
            },
            {
              title: 'Premium Portrait',
              price: '3,500,000 VND',
              features: [
                {
                  label: 'Package Includes:',
                  items: [
                    'Up to 90 minutes outdoor session',
                    '2 locations',
                    'Professional editing and retouching',
                    '80+ edited digital photos',
                    'Film photography option',
                  ],
                },
                {
                  label: 'Setup Time:',
                  items: ['20 minutes'],
                },
              ],
            },
          ],
        },
        {
          name: 'Wedding Outdoor',
          cards: [
            {
              title: 'Half Day Wedding',
              price: '4,500,000 VND',
              features: [
                {
                  label: 'Package Includes:',
                  items: [
                    'Up to 4 hours coverage',
                    '1-2 locations',
                    'Pre-wedding consultation',
                    '300+ edited photos',
                  ],
                },
                {
                  label: 'Setup Time:',
                  items: ['30 minutes'],
                },
              ],
            },
            {
              title: 'Full Day Wedding',
              price: '6,000,000 VND',
              features: [
                {
                  label: 'Package Includes:',
                  items: [
                    'Full day coverage (up to 8 hours)',
                    'Multiple locations',
                    'Pre-wedding consultation',
                    '500+ edited photos',
                    'Highlight video (3-5 minutes)',
                  ],
                },
                {
                  label: 'Includes:',
                  items: ['Album design', 'Digital backup'],
                },
                {
                  label: 'Setup Time:',
                  items: ['45 minutes'],
                },
              ],
            },
            {
              title: 'Premium Wedding',
              price: '9,000,000 VND',
              features: [
                {
                  label: 'Package Includes:',
                  items: [
                    'Extended coverage (up to 12 hours)',
                    'Unlimited locations',
                    'Pre-wedding consultation & engagement shoot',
                    '800+ edited photos',
                    'Cinematic highlight video (5-10 minutes)',
                    'Full ceremony video',
                  ],
                },
                {
                  label: 'Includes:',
                  items: [
                    'Premium album design',
                    'Digital backup',
                    'Film photography',
                  ],
                },
                {
                  label: 'Setup Time:',
                  items: ['60 minutes'],
                },
              ],
            },
          ],
        },
        {
          name: 'Wedding Photobooth',
          cards: [
            {
              title: 'Basic Photobooth',
              price: '3,500,000 VND',
              features: [
                {
                  label: 'Package Includes:',
                  items: [
                    '3-hour photobooth rental',
                    'Professional backdrop',
                    'Instant prints (2x6 format)',
                    'Digital copies for all photos',
                  ],
                },
                {
                  label: 'Setup Time:',
                  items: ['20 minutes'],
                },
              ],
            },
            {
              title: 'Standard Photobooth',
              price: '4,500,000 VND',
              features: [
                {
                  label: 'Package Includes:',
                  items: [
                    '4-hour photobooth rental',
                    'Professional backdrop',
                    'Instant prints (2x6 format)',
                    'Digital copies for all photos',
                    'Boomerang videos',
                    'GIF animations',
                  ],
                },
                {
                  label: 'Features:',
                  items: ['Custom props available', 'Social media sharing'],
                },
                {
                  label: 'Setup Time:',
                  items: ['30 minutes'],
                },
              ],
            },
            {
              title: 'Premium Photobooth',
              price: '6,000,000 VND',
              features: [
                {
                  label: 'Package Includes:',
                  items: [
                    '6-hour photobooth rental',
                    'Premium backdrop options',
                    'Instant prints (2x6 format)',
                    'Digital copies for all photos',
                    'Boomerang videos',
                    'GIF animations',
                    '360° video booth',
                  ],
                },
                {
                  label: 'Features:',
                  items: [
                    'Premium custom props',
                    'Album guestbook',
                    'Social media sharing',
                    'Custom photo templates',
                  ],
                },
                {
                  label: 'Setup Time:',
                  items: ['45 minutes'],
                },
              ],
            },
          ],
        },
      ],
    },
    vi: {
      title: 'Bảng Giá Dịch Vụ',
      subtitle: 'Chọn Gói Dịch Vụ Phù Hợp Với Nhu Cầu Của Bạn',
      description:
        'Các gói dịch vụ toàn diện của chúng tôi được thiết kế để đáp ứng các nhu cầu nhiếp ảnh khác nhau. Mỗi gói bao gồm chụp hình chuyên nghiệp, chỉnh sửa và giao hàng kỹ thuật số.',
      tabs: [
        {
          name: 'Chụp Ảnh Chân Dung Ngoài Trời',
          descriptions: [],
          cards: [
            {
              title: 'Gói Cơ Bản',
              price: '2.000.000 VND',
              features: [
                {
                  label: 'Gói Bao Gồm:',
                  items: [
                    'Thời gian chụp tối đa 45 phút',
                    '1 địa điểm',
                    'Chỉnh sửa chuyên nghiệp',
                    '30+ ảnh đã chỉnh sửa',
                  ],
                },
                {
                  label: 'Thời Gian Chuẩn Bị:',
                  items: ['10 phút'],
                },
              ],
            },
            {
              title: 'Gói Tiêu Chuẩn',
              price: '2.500.000 VND',
              features: [
                {
                  label: 'Gói Bao Gồm:',
                  items: [
                    'Thời gian chụp tối đa 60 phút',
                    '1 địa điểm',
                    'Chỉnh sửa và retouching chuyên nghiệp',
                    '50+ ảnh đã chỉnh sửa',
                  ],
                },
                {
                  label: 'Thời Gian Chuẩn Bị:',
                  items: ['15 phút'],
                },
              ],
            },
            {
              title: 'Gói Cao Cấp',
              price: '3.500.000 VND',
              features: [
                {
                  label: 'Gói Bao Gồm:',
                  items: [
                    'Thời gian chụp tối đa 90 phút',
                    '2 địa điểm',
                    'Chỉnh sửa và retouching chuyên nghiệp',
                    '80+ ảnh đã chỉnh sửa',
                    'Tùy chọn chụp film',
                  ],
                },
                {
                  label: 'Thời Gian Chuẩn Bị:',
                  items: ['20 phút'],
                },
              ],
            },
          ],
        },
        {
          name: 'Chụp Ảnh Cưới Ngoài Trời',
          descriptions: [],
          cards: [
            {
              title: 'Gói Nửa Ngày',
              price: '4.500.000 VND',
              features: [
                {
                  label: 'Gói Bao Gồm:',
                  items: [
                    'Chụp hình tối đa 4 giờ',
                    '1-2 địa điểm',
                    'Tư vấn trước khi chụp',
                    '300+ ảnh đã chỉnh sửa',
                  ],
                },
                {
                  label: 'Thời Gian Chuẩn Bị:',
                  items: ['30 phút'],
                },
              ],
            },
            {
              title: 'Gói Cả Ngày',
              price: '6.000.000 VND',
              features: [
                {
                  label: 'Gói Bao Gồm:',
                  items: [
                    'Chụp hình toàn ngày (tối đa 8 giờ)',
                    'Nhiều địa điểm',
                    'Tư vấn trước khi chụp',
                    '500+ ảnh đã chỉnh sửa',
                    'Video highlight (3-5 phút)',
                  ],
                },
                {
                  label: 'Bao Gồm:',
                  items: ['Thiết kế album', 'Sao lưu kỹ thuật số'],
                },
                {
                  label: 'Thời Gian Chuẩn Bị:',
                  items: ['45 phút'],
                },
              ],
            },
            {
              title: 'Gói Cao Cấp',
              price: '9.000.000 VND',
              features: [
                {
                  label: 'Gói Bao Gồm:',
                  items: [
                    'Chụp hình mở rộng (tối đa 12 giờ)',
                    'Không giới hạn địa điểm',
                    'Tư vấn trước cưới & chụp ảnh đính hôn',
                    '800+ ảnh đã chỉnh sửa',
                    'Video highlight điện ảnh (5-10 phút)',
                    'Video toàn bộ lễ cưới',
                  ],
                },
                {
                  label: 'Bao Gồm:',
                  items: [
                    'Thiết kế album cao cấp',
                    'Sao lưu kỹ thuật số',
                    'Chụp film',
                  ],
                },
                {
                  label: 'Thời Gian Chuẩn Bị:',
                  items: ['60 phút'],
                },
              ],
            },
          ],
        },
        {
          name: 'Photobooth Đám Cưới',
          descriptions: [
            'In ấn tức thì, tuỳ chọn kích thước giấy in 10x15, 13x18 thậm chí ảnh kích thước khổ A4 (Lưu ý: với ảnh kích thước càng lớn thì thời gian in sẽ càng lâu)',
            'Hỗ trợ 1 nhân viên chụp ảnh và 1 máy in',
            'Video Boomerang',
            'Hình ảnh động GIF',
            'Phụ kiện chụp ảnh như kính mắt, nơ, quạt, ...',
            'Bản sao kỹ thuật số cho tất cả ảnh',
          ],
          cards: [
            {
              title: 'Gói Cơ Bản',
              price: '2.000.000 VND',
              features: [
                {
                  label: 'Gói Bao Gồm:',
                  items: [
                    'Thuê photobooth 1 giờ',
                    'In ảnh không giới hạn trong 1 giờ.',
                    'Phông nền chuyên nghiệp',
                    'Tặng kèm 2 file thiết kế khung ảnh.',
                  ],
                },
                {
                  label: 'Thời Gian Chuẩn Bị:',
                  items: ['20 phút'],
                },
                {
                  label: 'Thêm 1 giờ làm việc phụ thu',
                  items: ['1.000.000 VND'],
                },
              ],
            },
            {
              title: 'Gói Tiêu Chuẩn',
              price: '3.500.000 VND',
              features: [
                {
                  label: 'Gói Bao Gồm:',
                  items: [
                    'Thuê photobooth 2 giờ',
                    'In ảnh không giới hạn trong 2 giờ.',
                    'Phông nền chuyên nghiệp',
                    'Tặng kèm 4 file thiết kế khung ảnh.',
                  ],
                },
                {
                  label: 'Tính Năng:',
                  items: [
                    'Đạo cụ tùy chỉnh có sẵn',
                    'Chia sẻ trên mạng xã hội',
                  ],
                },
                {
                  label: 'Thời Gian Chuẩn Bị:',
                  items: ['30 phút'],
                },
              ],
            },
            {
              title: 'Gói Cao Cấp',
              price: '5.000.000 VND',
              features: [
                {
                  label: 'Gói Bao Gồm:',
                  items: [
                    'Thuê photobooth 3 giờ',
                    'In ảnh không giới hạn trong 3 giờ.',
                    'Nhiều tùy chọn phông nền cao cấp',
                    'Tặng kèm 5 file thiết kế khung ảnh.',
                  ],
                },
                {
                  label: 'Tính Năng:',
                  items: [
                    'Đạo cụ tùy chỉnh cao cấp',
                    'Sách guestbook',
                    'Chia sẻ trên mạng xã hội',
                    'Mẫu ảnh tùy chỉnh',
                  ],
                },
                {
                  label: 'Thời Gian Chuẩn Bị:',
                  items: ['45 phút'],
                },
              ],
            },
            {
              title: 'Gói Cao Cấp Pro',
              price: '6.500.000 VND',
              features: [
                {
                  label: 'Gói Bao Gồm:',
                  items: [
                    'Thuê photobooth 4 giờ',
                    'In ảnh không giới hạn trong 4 giờ.',
                    'Nhiều tùy chọn phông nền cao cấp',
                    'Tặng kèm 5 file thiết kế khung ảnh.',
                  ],
                },
                {
                  label: 'Tính Năng:',
                  items: [
                    'Đạo cụ tùy chỉnh cao cấp',
                    'Sách guestbook',
                    'Chia sẻ trên mạng xã hội',
                    'Mẫu ảnh tùy chỉnh',
                  ],
                },
                {
                  label: 'Thời Gian Chuẩn Bị:',
                  items: ['45 phút'],
                },
              ],
            },
          ],
        },
      ],
    },
  };

  const data = pricingData[language];

  return (
    <section className='py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto'>
      <div className='text-center mb-12'>
        <h2 className='text-4xl md:text-5xl font-bold text-blue-600 mb-4'>
          {data.title}
        </h2>
        <p className='text-xl text-gray-600 mb-4'>{data.subtitle}</p>
        <p className='text-gray-700 max-w-2xl mx-auto'>{data.description}</p>
      </div>

      {/* Tabs */}
      <div className='flex justify-center mb-8'>
        <div className='inline-flex rounded-lg border border-gray-200 bg-white p-1'>
          {data.tabs.map((tab, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-6 py-3 rounded-md text-sm font-medium transition-all ${
                activeTab === idx
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>
      </div>

      {/* Active Tab's Pricing Cards */}
      <div className='bg-white rounded-lg p-4'>
        <ul className='mb-10 px-4'>
          {data.tabs[activeTab].descriptions?.map((item) => (
            <li className='mb-2'>
              <p className='flex items-center content-start relative'>
                <span className='w-2 h-2 bg-gray-600 rounded-full absolute -left-2 top-1/2 -translate-y-1/2'></span>
                <span className='text-gray-700 ml-3'>{item}</span>
              </p>
            </li>
          ))}
        </ul>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {data.tabs[activeTab].cards.map((card, idx) => (
            <PricingCard
              key={idx}
              title={card.title}
              price={card.price}
              features={card.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
