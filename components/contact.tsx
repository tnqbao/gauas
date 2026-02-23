'use client'

import { useState } from 'react'
import { Mail, Phone, MessageCircle, Send, ChevronDown } from 'lucide-react'
import { SiTelegram, SiMessenger, SiDiscord, SiLinkedin, SiFacebook } from 'react-icons/si'

export function Contact({ locale, t }: { locale: string; t: (key: string) => string }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isMessageMenuOpen, setIsMessageMenuOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    window.location.href = `mailto:${t('owner.email')}?subject=Project Inquiry from ${formData.name}&body=${encodeURIComponent(formData.message)}`
  }

  const handleCall = () => {
    window.location.href = `tel:${t('owner.phone')}`
  }

  const channels = [
    {
      label: 'Telegram',
      icon: SiTelegram,
      color: 'bg-[#0088cc] hover:bg-[#0077b5]',
      href: `https://t.me/${t('owner.telegram')}`,
    },
    {
      label: 'Messenger',
      icon: SiMessenger,
      color: 'bg-[#0084ff] hover:bg-[#006ed6]',
      href: `https://m.me/${t('owner.messenger')}`,
    },
    {
      label: 'Discord',
      icon: SiDiscord,
      color: 'bg-[#5865F2] hover:bg-[#4752c4]',
      href: `https://discord.com/users/${t('owner.discord')}`,
    },
    {
      label: 'Facebook',
      icon: SiFacebook,
      color: 'bg-[#1877F2] hover:bg-[#1259c3]',
      href: `https://www.facebook.com/${t('owner.messenger')}`,
    },
    {
      label: 'LinkedIn',
      icon: SiLinkedin,
      color: 'bg-[#0A66C2] hover:bg-[#084d91]',
      href: `https://linkedin.com/in/${t('owner.linkedin')}`,
    },
    {
      label: 'Email',
      icon: Mail,
      color: 'bg-[#EA4335] hover:bg-[#c5362a]',
      href: `mailto:${t('owner.email')}`,
    },
  ]

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-950 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            {t('contact.title')}
          </h2>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 max-w-2xl mx-auto">
            {locale === 'vi'
              ? 'Liên hệ ngay để bắt đầu dự án của bạn'
              : 'Get in touch to start your project'}
          </p>
        </div>

        {/* Contact Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16">
          {/* Call Me Button */}
          <button
            onClick={handleCall}
            className="group p-8 rounded-xl bg-green-600 hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-700 transition-colors duration-200 border-2 border-green-700 dark:border-green-500"
          >
            <div className="flex flex-col items-center gap-4">
              <div className="p-4 bg-green-700 dark:bg-green-700 rounded-full group-hover:scale-110 transition-transform duration-200">
                <Phone size={32} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {locale === 'vi' ? 'Gọi Cho Tôi' : 'Call Me'}
                </h3>
                <p className="text-white font-semibold">{t('owner.phone')}</p>
              </div>
            </div>
          </button>

          {/* Message Button + expandable 6-option grid */}
          <div className="flex flex-col">
            <button
              onClick={() => setIsMessageMenuOpen(!isMessageMenuOpen)}
              className={`group p-8 bg-blue-600 hover:bg-blue-700 transition-colors duration-200 border-2 border-blue-700 dark:border-blue-500 w-full ${
                isMessageMenuOpen ? 'rounded-t-xl rounded-b-none border-b-0' : 'rounded-xl'
              }`}
            >
              <div className="flex flex-col items-center gap-4">
                <div className="p-4 bg-blue-700 rounded-full group-hover:scale-110 transition-transform duration-200">
                  <MessageCircle size={32} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {locale === 'vi' ? 'Nhắn Tin' : 'Message'}
                  </h3>
                  <p className="text-white flex items-center justify-center gap-2">
                    {locale === 'vi' ? 'Chọn kênh liên hệ' : 'Choose contact channel'}
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-300 ${isMessageMenuOpen ? 'rotate-180' : ''}`}
                    />
                  </p>
                </div>
              </div>
            </button>

            {/* 6-option grid — expands below the button */}
            <div
              className="overflow-hidden transition-all duration-500 ease-in-out"
              style={{ maxHeight: isMessageMenuOpen ? '200px' : '0px', opacity: isMessageMenuOpen ? 1 : 0 }}
            >
              <div className="grid grid-cols-3 border-2 border-t-0 border-blue-700 dark:border-blue-500 rounded-b-xl overflow-hidden">
                {channels.map((ch, i) => {
                  const Icon = ch.icon
                  const isLastRow = i >= 3
                  const isLastInRow = (i + 1) % 3 === 0
                  return (
                    <a
                      key={ch.label}
                      href={ch.href}
                      target={ch.label !== 'Email' ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className={`${ch.color} flex flex-col items-center justify-center gap-2 py-5 transition-all duration-200 group
                        ${!isLastRow ? 'border-b-2 border-blue-700 dark:border-blue-500' : ''}
                        ${!isLastInRow ? 'border-r-2 border-blue-700 dark:border-blue-500' : ''}
                      `}
                    >
                      <Icon size={26} className="text-white group-hover:scale-110 transition-transform duration-200" />
                      <span className="text-white text-sm font-semibold">{ch.label}</span>
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form with Email */}
        <div className="max-w-3xl mx-auto">
          <div className="rounded-xl bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-600 dark:bg-blue-600 rounded-lg">
                <Mail className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{locale === 'vi' ? 'Gửi Email' : 'Send Email'}</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">{t('owner.email')}</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                  {t('contact.name')}
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-blue-600 dark:focus:border-blue-500 transition-colors"
                  placeholder={locale === 'vi' ? 'Tên của bạn' : 'Your name'}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                  {t('contact.email')}
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-blue-600 dark:focus:border-blue-500 transition-colors"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                  {t('contact.message')}
                </label>
                <textarea
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border-2 border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-blue-600 dark:focus:border-blue-500 transition-colors resize-none"
                  placeholder={locale === 'vi' ? 'Mô tả dự án của bạn...' : 'Describe your project...'}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                {t('contact.send')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
