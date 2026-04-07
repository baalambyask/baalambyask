import React from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="w-full py-16 sm:py-20 md:py-24 lg:py-32 bg-white">
      <div className="section-container">
        <div className="max-w-4xl mx-auto space-y-16 sm:space-y-20">
          <div className="text-center space-y-6 sm:space-y-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 heading-serif leading-tight">
              Contact Info
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed font-medium max-w-2xl mx-auto">
              For admissions, academic inquiries, or faculty appointments, please visit our Registered Office or reach out through the following channels.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
            <div className="bg-slate-50 p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-[2.5rem] border border-slate-100 shadow-sm space-y-4 sm:space-y-6">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 border-b border-slate-200 pb-2 sm:pb-3">Office Hours</h4>
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 bg-white rounded-2xl shadow-sm flex-shrink-0">
                  <Clock size={20} className="md:w-6 md:h-6 text-orange-600" />
                </div>
<div className="text-base sm:text-lg font-bold text-slate-700 space-y-2">
  <p>
    <span className="text-blue-600">Baalam Playschool</span><br/>
    Morning: 10 am to 12 noon<br/>
    Evening: 5:30 pm to 7:30 pm
  </p>

  <p>
    <span className="text-orange-600">ASK High School Enquiry</span><br/>
    Mon to Sat: 5 pm to 8 pm
  </p>

</div>
              </div>
            </div>

            <div className="bg-slate-50 p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-[2.5rem] border border-slate-100 shadow-sm space-y-4 sm:space-y-6">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 border-b border-slate-200 pb-2 sm:pb-3">Location</h4>
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 bg-white rounded-2xl shadow-sm flex-shrink-0">
                  <MapPin size={20} className="md:w-6 md:h-6 text-orange-600" />
                </div>
                <div className="text-base sm:text-lg font-bold text-slate-700 space-y-2">
                  <p>1-9-295/13/A/4 <br />Vidyanagar Hyderabad 500044</p>

                  <a
                    href="https://maps.app.goo.gl/2DqBN9et4HCajtN69"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 px-4 py-2 text-sm font-semibold text-white bg-orange-600 rounded-lg hover:bg-orange-700 transition"
                  >
                    View on Map
                  </a>

                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-[2.5rem] border border-slate-100 shadow-sm space-y-4 sm:space-y-6">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 border-b border-slate-200 pb-2 sm:pb-3">Direct Lines</h4>
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 bg-white rounded-2xl shadow-sm flex-shrink-0">
                  <Phone size={20} className="md:w-6 md:h-6 text-orange-600" />
                </div>
                <div className="text-base sm:text-lg font-bold text-slate-700 space-y-1">
                  <p>ASK - (+91) 92465 43851 :</p>
                  <p>BAALAM - (+91) 89772 24488</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-[2.5rem] border border-slate-100 shadow-sm space-y-4 sm:space-y-6">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 border-b border-slate-200 pb-2 sm:pb-3">Email </h4>
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 bg-white rounded-2xl shadow-sm flex-shrink-0">
                  <Mail size={20} className="md:w-6 md:h-6 text-orange-600" />
                </div>
                <div className="text-base sm:text-lg font-bold text-slate-700">
                  <p>askacademy@gmail.com</p>
                  <p>baalam.askeds@gmail.com</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;