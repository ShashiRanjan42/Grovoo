// "use client"

// import { useEffect, useState } from "react"
// import axios from "axios"
// import {
//   User,
//   Mail,
//   Phone,
//   Building,
//   Truck,
//   Shield,
//   Calendar,
//   Clock,
//   Star,
//   Edit,
//   Camera,
//   MapPin,
//   Award,
//   Settings,
//   Bell,
//   Globe,
//   X,
//   Check,
//   ChevronDown,
//   Sparkles,
// } from "lucide-react"
// import toast from "react-hot-toast"

// export default function Profile() {
//   const [isEditing, setIsEditing] = useState(false)
//   const [hasChanges, setHasChanges] = useState(false)
//   const [dropdownOpen, setDropdownOpen] = useState({})
//   const [isDialogOpen, setIsDialogOpen] = useState(false)
//   const [otp, setOtp] = useState("")
//   const [isVerifying, setIsVerifying] = useState(false)
//   const [verificationError, setVerificationError] = useState(null)
//   const [isVerified, setIsVerified] = useState(false)

//   const [profileData, setProfileData] = useState({
//     name: "Abhinav Singh",
//     email: "abhisar@1StopMandi.com",
//     phone: "+91 98765 43210",
//     role: "hotel",
//     address: "123 Business District, patna, Maharashtra 400001",
//     businessName: "Singh's Restaurant",
//     gstin: "27ABCDE1234F1Z5",
//     licenseNumber: "FSSAI-12345678901234",
//     joinDate: "2023-01-15",
//     lastActive: "2024-01-15 10:30 AM",
//     rating: 4.8,
//     totalOrders: 156,
//     status: "active",
//     businessType: "restaurant",
//     vehicleType: "bike",
//     vehicleNumber: "MH 01 AB 1234",
//     drivingLicense: "MH1234567890",
//     deliveryZone: "Andheri, Bandra, Juhu",
//     language: "english",
//     timezone: "ist",
//     emailNotifications: true,
//     smsNotifications: true,
//     orderUpdates: true,
//     marketingEmails: false,
//   })

//   const closeDialog = () => {
//     setIsDialogOpen(false);
//   };

//   useEffect(() => {
//     if (profileData?.isEmailVerified) {
//       setIsVerified(true)
//     }
//   }, [profileData.isEmailVerified])

//   const sendOtp = async () => {
//     try {
//       const response = await axios.get("/api/auth/send-otp", { withCredentials: true });
//       console.log("response", response);
//       if (response.data.success) {
//         // setAuthenticationCode(response.data.authenticationCode);
//         setIsDialogOpen(true);
//         console.log("OTP sent successfully");
//       }
//     }
//     catch (err) {
//       setVerificationError("Some Error Occurred. Please try again later.");
//       console.log(err);
//     }
//   }

//   const verifyOtp = async () => {
//     setIsVerifying(true)
//     try {
//       const response = await axios.post("/api/auth/verify-otp", { otp }, { withCredentials: true });
//       if (response.data.success) {
//         setOtp("")
//         setIsVerified(true)
//         closeDialog();
//         toast.success("Email verified successfully!");
//       }
//     }
//     catch (error) {
//       console.error("Error verifying email:", error)
//       setVerificationError("Invalid OTP. Please try again.")
//     } finally { setIsVerifying(false); }
//   }

//   useEffect(() => {
//     // Simulate fetching profile data from an API
//     const fetchProfileData = async () => {
//       const response = await axios.get("/api/auth/profile");
//       const data = response.data.profile;
//       console.log("Fetched profile data:", data);
//       setProfileData(data);
//     }
//     fetchProfileData().catch((error) => {
//       console.error("Error fetching profile data:", error);
//     });
//   }, [])

//   const [originalData, setOriginalData] = useState({ ...profileData })

//   const handleSave = () => {
//     setIsEditing(false)
//     setHasChanges(false)
//     setOriginalData({ ...profileData })
//     console.log("Profile saved:", profileData)
//   }

//   const handleCancel = () => {
//     setProfileData({ ...originalData })
//     setIsEditing(false)
//     setHasChanges(false)
//   }

//   // const handleInputChange = (field, value) => {
//   //   setProfileData((prev) => ({
//   //     ...prev,
//   //     [field]: value,
//   //   }))
//   //   setHasChanges(true)
//   // }
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     console.log(name,value);
//     setProfileData((prev) => ({
//       ...prev,
//       [name]: value,
//     }))
//     setHasChanges(true)
//   }

//   const toggleDropdown = (name) => {
//     setDropdownOpen((prev) => ({
//       ...prev,
//       [name]: !prev[name],
//     }))
//   }

//   const selectOption = (field, value, dropdownName) => {
//     handleInputChange(field, value)
//     setDropdownOpen((prev) => ({
//       ...prev,
//       [dropdownName]: false,
//     }))
//   }

//   const getRoleColor = (role) => {
//     switch (role) {
//       case "admin":
//         return "bg-red-50 text-red-600 border-red-200"
//       case "hotel":
//         return "bg-blue-50 text-blue-600 border-blue-200"
//       case "delivery":
//         return "bg-green-50 text-green-600 border-green-200"
//       default:
//         return "bg-gray-50 text-gray-600 border-gray-200"
//     }
//   }

//   const getRoleIcon = (role) => {
//     switch (role) {
//       case "admin":
//         return <Shield className="w-4 h-4" />
//       case "hotel":
//         return <Building className="w-4 h-4" />
//       case "delivery":
//         return <Truck className="w-4 h-4" />
//       default:
//         return <User className="w-4 h-4" />
//     }
//   }

//   const getInitials = (name) => {
//     if (!name) return "N/A"
//     return name
//       .split(" ")
//       .map((n) => n[0])
//       .join("")
//       .toUpperCase()
//   }

//   const getDisplayValue = (field) => {
//     const values = {
//       role: { admin: "Admin", hotel: "Hotel/Restaurant", delivery: "Delivery Agent" },
//       businessType: {
//         restaurant: "Restaurant",
//         hotel: "Hotel",
//         cafe: "Cafe",
//         catering: "Catering Service",
//         "cloud-kitchen": "Cloud Kitchen",
//       },
//       vehicleType: { bike: "Motorcycle", scooter: "Scooter", bicycle: "Bicycle", van: "Van" },
//       language: { english: "English", hindi: "Hindi", marathi: "Marathi", gujarati: "Gujarati" },
//       timezone: { ist: "IST (UTC+5:30)", utc: "UTC" },
//     }
//     return values[field]?.[profileData[field]] || profileData[field]
//   }

//   // Subtle Custom Components
//   const Button = ({ children, onClick, variant = "primary", disabled = false, className = "" }) => {
//     const baseClasses =
//       "px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
//     const variants = {
//       primary:
//         "bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white disabled:from-gray-300 disabled:to-gray-400 disabled:transform-none disabled:shadow-md",
//       secondary:
//         "bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-800 disabled:from-gray-50 disabled:to-gray-100 disabled:transform-none",
//       success:
//         "bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white disabled:from-gray-300 disabled:to-gray-400 disabled:transform-none",
//       outline:
//         "border-2 border-gray-300 text-gray-700 hover:border-purple-400 hover:bg-gradient-to-r hover:from-purple-50 hover:to-indigo-50 bg-white disabled:bg-gray-50 disabled:transform-none",
//     }
//     return (
//       <button
//         onClick={onClick}
//         disabled={disabled}
//         className={`${baseClasses} ${variants[variant]} ${className} ${disabled ? "cursor-not-allowed" : "cursor-pointer"}`}
//       >
//         {children}
//       </button>
//     )
//   }

//   const Input = ({ value, onChange, disabled = false, type = "text", placeholder = "", className = "" }) => {
//     return (
//       <input
//         type={type}
//         value={value}
//         onChange={onChange}
//         disabled={disabled}
//         placeholder={placeholder}
//         className={`w-full h-11 px-3 border rounded-lg transition-all duration-200 ${disabled
//           ? "bg-gray-50 border-gray-200 text-gray-500"
//           : "bg-white border-gray-300 hover:border-gray-400 focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-100"
//           } ${className}`}
//       />
//     )
//   }

//   const Textarea = ({ value, onChange, disabled = false, placeholder = "", className = "" }) => {
//     return (
//       <textarea
//         value={value}
//         onChange={onChange}
//         disabled={disabled}
//         placeholder={placeholder}
//         rows={4}
//         className={`w-full px-3 py-2.5 border rounded-lg transition-all duration-200 resize-none ${disabled
//           ? "bg-gray-50 border-gray-200 text-gray-500"
//           : "bg-white border-gray-300 hover:border-gray-400 focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-100"
//           } ${className}`}
//       />
//     )
//   }

//   const Select = ({ value, onChange, options, disabled = false, placeholder = "Select option", name }) => {
//     const isOpen = dropdownOpen[name]

//     return (
//       <div className="relative">
//         <button
//           type="button"
//           onClick={() => !disabled && toggleDropdown(name)}
//           disabled={disabled}
//           className={`w-full h-11 px-3 border rounded-lg flex items-center justify-between transition-all duration-200 ${disabled
//             ? "bg-gray-50 border-gray-200 text-gray-500"
//             : "bg-white border-gray-300 hover:border-gray-400 focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-100"
//             }`}
//         >
//           <span>{getDisplayValue(name) || placeholder}</span>
//           <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
//         </button>

//         {isOpen && !disabled && (
//           <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
//             {options.map((option) => (
//               <button
//                 key={option.value}
//                 type="button"
//                 onClick={() => selectOption(name, option.value, name)}
//                 className="w-full px-3 py-2.5 text-left hover:bg-gray-50 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg"
//               >
//                 {option.label}
//               </button>
//             ))}
//           </div>
//         )}
//       </div>
//     )
//   }

//   const Switch = ({ checked, onChange, disabled = false }) => {
//     return (
//       <button
//         type="button"
//         onClick={() => !disabled && onChange(!checked)}
//         disabled={disabled}
//         className={`relative inline-flex h-7 w-12 items-center rounded-full transition-all duration-300 transform hover:scale-105 ${checked
//           ? "bg-gradient-to-r from-purple-500 to-indigo-600 shadow-lg shadow-purple-200"
//           : "bg-gray-300 hover:bg-gray-400"
//           } ${disabled ? "opacity-50 cursor-not-allowed hover:scale-100" : "cursor-pointer"}`}
//       >
//         <span
//           className={`inline-block h-5 w-5 transform rounded-full bg-white transition-all duration-300 shadow-lg ${checked ? "translate-x-6 shadow-purple-200" : "translate-x-1"
//             }`}
//         />
//       </button>
//     )
//   }

//   const Badge = ({ children, className = "" }) => {
//     return (
//       <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${className}`}>
//         {children}
//       </span>
//     )
//   }

//   const Avatar = ({ src, alt, size = "w-24 h-24", children }) => {
//     return (
//       <div
//         className={`${size} rounded-full overflow-hidden border-4 border-white shadow-lg bg-slate-600 flex items-center justify-center transition-all duration-200 hover:shadow-xl`}
//       >
//         {src ? (
//           <img src={src || "/placeholder.svg"} alt={alt} className="w-full h-full object-cover" />
//         ) : (
//           <span className="text-white text-2xl font-semibold">{children}</span>
//         )}
//       </div>
//     )
//   }

//   const InfoCard = ({ icon: Icon, label, value, className = "" }) => {
//     return (
//       <div className={`flex items-center space-x-3 p-3 bg-gray-50 rounded-lg border border-gray-100 ${className}`}>
//         <div className="p-2 bg-white rounded-lg border border-gray-200">
//           <Icon className="w-4 h-4 text-gray-600" />
//         </div>
//         <div>
//           <p className="text-sm text-gray-500 font-medium">{label}</p>
//           <p className="font-medium text-gray-900">{value}</p>
//         </div>
//       </div>
//     )
//   }

//   const StatCard = ({ icon: Icon, value, label, color = "slate" }) => {
//     const colors = {
//       slate: "bg-slate-600",
//       yellow: "bg-yellow-500",
//       emerald: "bg-emerald-600",
//     }

//     return (
//       <div className="text-center">
//         <div className={`flex items-center justify-center space-x-2 mb-2 p-3 ${colors[color]} rounded-lg shadow-sm`}>
//           <Icon className="w-5 h-5 text-white" />
//           <span className="text-xl font-semibold text-white">{value}</span>
//         </div>
//         <p className="text-sm text-gray-500 font-medium">{label}</p>
//       </div>
//     )
//   }

//   const SectionHeader = ({ icon: Icon, title, iconBg = "bg-gray-100", iconColor = "text-gray-600" }) => {
//     return (
//       <div className="flex items-center mb-6">
//         <div className={`p-2 ${iconBg} rounded-lg mr-3`}>
//           <Icon className={`w-5 h-5 ${iconColor}`} />
//         </div>
//         <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
//       </div>
//     )
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
//         <div className="container mx-auto px-4 py-4">
//           <div className="flex items-center justify-between">
//             <h1 className="text-2xl font-bold text-blue-600">Your Profile</h1>
//             <div className="flex items-center space-x-3">
//               {isEditing && hasChanges && (
//                 <Button variant="outline" onClick={handleCancel}>
//                   <X className="w-4 h-4 mr-2" />
//                   Cancel
//                 </Button>
//               )}
//               <Button
//                 variant={isEditing ? "success" : "primary"}
//                 onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
//               >
//                 {isEditing ? (
//                   <>
//                     <Check className="w-4 h-4 mr-2" />
//                     Save Changes
//                   </>
//                 ) : (
//                   <>
//                     <Edit className="w-4 h-4 mr-2" />
//                     Edit Profile
//                   </>
//                 )}
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="container mx-auto px-4 py-8">
//         <div className="max-w-4xl mx-auto space-y-8">
//           {/* Profile Header Card */}
//           <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
//             <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-6 lg:space-y-0 lg:space-x-6">
//               <div className="relative">
//                 <Avatar src="/placeholder.svg?height=96&width=96" alt={profileData.name}>
//                   {getInitials(profileData.name)}
//                 </Avatar>
//                 {isEditing && (
//                   <button className="absolute -bottom-1 -right-1 w-8 h-8 bg-slate-600 hover:bg-slate-700 text-white rounded-full flex items-center justify-center shadow-sm transition-colors duration-200">
//                     <Camera className="w-4 h-4" />
//                   </button>
//                 )}
//                 <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
//               </div>

//               <div className="flex-1 w-full">
//                 <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between mb-4">
//                   <div className="mb-4 xl:mb-0">
//                     <h1 className="text-2xl font-semibold text-gray-900 mb-2">{profileData?.name}</h1>
//                     <div className="flex flex-wrap items-center gap-2 mb-3">
//                       <Badge className={`${getRoleColor(profileData?.role)} flex items-center space-x-1`}>
//                         {getRoleIcon(profileData?.role)}
//                         <span className="font-medium">{getDisplayValue("role")}</span>
//                       </Badge>
//                       <Badge className="text-green-600 border-green-200 bg-green-50">
//                         <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
//                         Active
//                       </Badge>
//                     </div>
//                   </div>

//                   <div className="flex items-center space-x-6">
//                     <StatCard icon={Star} value={profileData?.rating} label="Rating" color="yellow" />
//                     <StatCard icon={Award} value={profileData?.totalOrders} label="Orders" color="slate" />
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//                   <InfoCard icon={Mail} label="Email" value={profileData?.email} />
//                   <InfoCard icon={Phone} label="Phone" value={profileData?.phone} />
//                   <InfoCard
//                     icon={Calendar}
//                     label="Member Since"
//                     value={new Date(profileData?.joined).toLocaleDateString('en-GB')}
//                   />
//                   {/* <InfoCard icon={Clock} label="Last Active" value={profileData?.lastActive} /> */}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* All Sections - No Tabs */}
//           <div className="space-y-6">
//             {/* Personal Info Tab */}
//             <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border-0 animate-in slide-in-from-right-4 duration-500">
//               <div className="p-6 border-b border-gray-200">
//                 <h2 className="text-2xl font-bold text-gray-900 flex items-center">
//                   <div className="p-2 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-lg mr-3">
//                     <User className="w-6 h-6 text-purple-600" />
//                   </div>
//                   Personal Information
//                   <Sparkles className="w-5 h-5 ml-2 text-purple-500 animate-pulse" />
//                 </h2>
//               </div>
//               <div className="p-8 space-y-8">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div className="space-y-3 group">
//                     <label className="text-sm font-semibold text-gray-700 flex items-center">
//                       <User className="w-4 h-4 mr-2 text-purple-600" />
//                       Full Name
//                     </label>
//                     <Input
//                       name="name"
//                       value={profileData?.name}
//                       disabled={!isEditing}
//                       onChange={handleInputChange}
//                     />
//                   </div>

//                   <div className="space-y-3 group">
//                     <label className="text-sm font-semibold text-gray-700 flex items-center">
//                       <Shield className="w-4 h-4 mr-2 text-purple-600" />
//                       Role
//                     </label>
//                     <Select
//                       value={profileData?.role}
//                       disabled={!isEditing}
//                       name="role"
//                       options={[
//                         { value: "admin", label: "Admin" },
//                         { value: "hotel", label: "Hotel/Restaurant" },
//                         { value: "delivery", label: "Delivery Agent" },
//                       ]}
//                     />
//                   </div>

//                   <div className="space-y-3 group">
//                     <label className="text-sm font-semibold text-gray-700 flex items-center">
//                       <Mail className="w-4 h-4 mr-2 text-purple-600" />
//                       Email Address
//                     </label>
//                     <button
//                       onClick={() => {
//                         sendOtp();
//                         setIsDialogOpen((p) => !p);
//                       }}
//                       disabled={isVerified || isVerifying}
//                       className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${isVerified
//                         ? "bg-green-100 text-green-600 cursor-not-allowed" : "bg-blue-100 text-blue-600 hover:bg-blue-200"}`}
//                     >{isVerified ? "Verified" : "Not Verified"}</button>
//                     <Input
//                       type="email"
//                       name="email"
//                       value={profileData?.email}
//                       disabled={!isEditing}
//                       onChange={handleInputChange}
//                     />
//                   </div>
//                   {isDialogOpen && (
//                     <div
//                       className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center"
//                       onClick={closeDialog}
//                     >
//                       <div
//                         className="bg-white text-gray-800 rounded-xl shadow-xl p-6 w-full max-w-sm relative"
//                         onClick={(e) => e.stopPropagation()}
//                       >
//                         <button
//                           onClick={closeDialog}
//                           className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
//                         >
//                           ✖
//                         </button>

//                         <h2 className="text-lg font-semibold mb-4 text-center">Verify Your Email</h2>

//                         <form
//                           onSubmit={(e) => {
//                             e.preventDefault();
//                             verifyOtp(); // your OTP verification logic
//                           }}
//                           className="space-y-4"
//                         >
//                           <div>
//                             <label className="block text-sm font-medium text-gray-700 mb-1">
//                               Enter OTP sent to {profileData?.email}
//                             </label>
//                             <input
//                               type="text"
//                               value={otp}
//                               onChange={(e) => setOtp(e.target.value)}
//                               disabled={isVerifying}
//                               required
//                               placeholder="Enter OTP Code"
//                               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-900"
//                             />
//                           </div>
//                           {verificationError && <div>{JSON.stringify(verificationError)}</div>}
//                           <button
//                             type="submit"
//                             disabled={isVerifying}
//                             className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
//                           >
//                             {isVerifying ? "Verifying..." : "Verify Email"}
//                           </button>
//                         </form>
//                       </div>
//                     </div>
//                   )}

//                   <div className="space-y-3 group">
//                     <label className="text-sm font-semibold text-gray-700 flex items-center">
//                       <Phone className="w-4 h-4 mr-2 text-purple-600" />
//                       Phone Number
//                     </label>
//                     <Input
//                       name="phone"
//                       value={profileData?.phone}
//                       disabled={!isEditing}
//                       onChange={handleInputChange}
//                     />
//                   </div>
//                 </div>

//                 <div className="space-y-3 group">
//                   <label className="text-sm font-semibold text-gray-700 flex items-center">
//                     <MapPin className="w-4 h-4 mr-2 text-purple-600" />
//                     Address
//                   </label>
//                   <Textarea
//                     name="address"
//                     value={profileData?.address}
//                     disabled={!isEditing}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Business Details Tab */}
//             <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border-0 animate-in slide-in-from-right-4 duration-500">
//               <div className="p-6 border-b border-gray-200">
//                 <h2 className="text-2xl font-bold text-gray-900 flex items-center">
//                   <div className="p-2 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg mr-3">
//                     <Building className="w-6 h-6 text-blue-600" />
//                   </div>
//                   Business Information
//                   <Sparkles className="w-5 h-5 ml-2 text-blue-500 animate-pulse" />
//                 </h2>
//               </div>
//               <div className="p-8 space-y-8">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div className="space-y-3 group">
//                     <label className="text-sm font-semibold text-gray-700 flex items-center">
//                       <Building className="w-4 h-4 mr-2 text-purple-600" />
//                       Business Name
//                     </label>
//                     <Input
//                       name="businessName"
//                       value={profileData?.businessName}
//                       disabled={!isEditing}
//                       onChange={handleInputChange}
//                     />
//                   </div>

//                   <div className="space-y-3 group">
//                     <label className="text-sm font-semibold text-gray-700 flex items-center">
//                       <Award className="w-4 h-4 mr-2 text-purple-600" />
//                       Business Type
//                     </label>
//                     <Select
//                       value={profileData?.businessType}
//                       disabled={!isEditing}
//                       name="businessType"
//                       options={[
//                         { value: "restaurant", label: "Restaurant" },
//                         { value: "hotel", label: "Hotel" },
//                         { value: "cafe", label: "Cafe" },
//                         { value: "catering", label: "Catering Service" },
//                         { value: "cloud-kitchen", label: "Cloud Kitchen" },
//                       ]}
//                     />
//                   </div>

//                   <div className="space-y-3 group">
//                     <label className="text-sm font-semibold text-gray-700">GST Number</label>
//                     <Input
//                       value={profileData?.gstin}
//                       disabled={!isEditing}
//                       onChange={(e) => handleInputChange("gstin", e.target.value)}
//                     />
//                   </div>

//                   <div className="space-y-3 group">
//                     <label className="text-sm font-semibold text-gray-700">License Number</label>
//                     <Input
//                       value={profileData?.licenseNumber}
//                       disabled={!isEditing}
//                       onChange={(e) => handleInputChange("licenseNumber", e.target.value)}
//                     />
//                   </div>
//                 </div>

//                 {profileData?.role === "delivery" && (
//                   <div className="pt-6 border-t border-gray-200 animate-in slide-in-from-bottom-2">
//                     <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
//                       <div className="p-2 bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg mr-3">
//                         <Truck className="w-5 h-5 text-green-600" />
//                       </div>
//                       Delivery Information
//                     </h3>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                       <div className="space-y-3 group">
//                         <label className="text-sm font-semibold text-gray-700">Vehicle Type</label>
//                         <Select
//                           value={profileData?.vehicleType}
//                           disabled={!isEditing}
//                           name="vehicleType"
//                           options={[
//                             { value: "bike", label: "Motorcycle" },
//                             { value: "scooter", label: "Scooter" },
//                             { value: "bicycle", label: "Bicycle" },
//                             { value: "van", label: "Van" },
//                           ]}
//                         />
//                       </div>

//                       <div className="space-y-3 group">
//                         <label className="text-sm font-semibold text-gray-700">Vehicle Number</label>
//                         <Input
//                           value={profileData?.vehicleNumber}
//                           disabled={!isEditing}
//                           onChange={(e) => handleInputChange("vehicleNumber", e.target.value)}
//                         />
//                       </div>

//                       <div className="space-y-3 group">
//                         <label className="text-sm font-semibold text-gray-700">Driving License</label>
//                         <Input
//                           value={profileData?.drivingLicense}
//                           disabled={!isEditing}
//                           onChange={(e) => handleInputChange("drivingLicense", e.target.value)}
//                         />
//                       </div>

//                       <div className="space-y-3 group">
//                         <label className="text-sm font-semibold text-gray-700">Delivery Zone</label>
//                         <Input
//                           value={profileData?.deliveryZone}
//                           disabled={!isEditing}
//                           onChange={(e) => handleInputChange("deliveryZone", e.target.value)}
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Preferences Tab */}
//             <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border-0 animate-in slide-in-from-right-4 duration-500">
//               <div className="p-6 border-b border-gray-200">
//                 <h2 className="text-2xl font-bold text-gray-900 flex items-center">
//                   <div className="p-2 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg mr-3">
//                     <Settings className="w-6 h-6 text-indigo-600" />
//                   </div>
//                   Account Preferences
//                   <Sparkles className="w-5 h-5 ml-2 text-indigo-500 animate-pulse" />
//                 </h2>
//               </div>
//               <div className="p-8 space-y-8">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div className="space-y-3 group">
//                     <label className="text-sm font-semibold text-gray-700 flex items-center">
//                       <Globe className="w-4 h-4 mr-2 text-purple-600" />
//                       Preferred Language
//                     </label>
//                     <Select
//                       value={profileData?.language}
//                       disabled={!isEditing}
//                       name="language"
//                       options={[
//                         { value: "english", label: "English" },
//                         { value: "hindi", label: "Hindi" },
//                         { value: "marathi", label: "Marathi" },
//                         { value: "gujarati", label: "Gujarati" },
//                       ]}
//                     />
//                   </div>

//                   <div className="space-y-3 group">
//                     <label className="text-sm font-semibold text-gray-700 flex items-center">
//                       <Clock className="w-4 h-4 mr-2 text-purple-600" />
//                       Timezone
//                     </label>
//                     <Select
//                       value={profileData?.timezone}
//                       disabled={!isEditing}
//                       name="timezone"
//                       options={[
//                         { value: "ist", label: "IST (UTC+5:30)" },
//                         { value: "utc", label: "UTC" },
//                       ]}
//                     />
//                   </div>
//                 </div>

//                 <div className="pt-6 border-t border-gray-200">
//                   <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
//                     <div className="p-2 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-lg mr-3">
//                       <Bell className="w-5 h-5 text-yellow-600" />
//                     </div>
//                     Notification Settings
//                   </h3>
//                   <div className="space-y-4">
//                     {[
//                       {
//                         key: "emailNotifications",
//                         label: "Email Notifications",
//                         desc: "Receive notifications via email",
//                       },
//                       { key: "smsNotifications", label: "SMS Notifications", desc: "Receive notifications via SMS" },
//                       {
//                         key: "orderUpdates",
//                         label: "Order Updates",
//                         desc: "Get notified about order status changes",
//                       },
//                       {
//                         key: "marketingEmails",
//                         label: "Marketing Emails",
//                         desc: "Receive promotional offers and updates",
//                       },
//                     ].map(({ key, label, desc }) => (
//                       <div
//                         key={key}
//                         className="flex items-center justify-between p-5 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300 group"
//                       >
//                         <div>
//                           <label className="text-sm font-semibold text-gray-900 group-hover:text-purple-700 transition-colors duration-300">
//                             {label}
//                           </label>
//                           <p className="text-sm text-gray-500">{desc}</p>
//                         </div>
//                         <Switch
//                           checked={profileData[key]}
//                           disabled={!isEditing}
//                           onChange={(checked) => handleInputChange(key, checked)}
//                         />
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import {
  User,
  Mail,
  Phone,
  Building,
  Truck,
  Shield,
  Calendar,
  Clock,
  Star,
  Edit,
  Camera,
  MapPin,
  Award,
  Settings,
  Bell,
  Globe,
  X,
  Check,
  Sparkles,
} from "lucide-react"
import toast from "react-hot-toast"

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false)
  const [hasChanges, setHasChanges] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState({})
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [otp, setOtp] = useState("")
  const [isVerifying, setIsVerifying] = useState(false)
  const [verificationError, setVerificationError] = useState(null)
  const [isVerified, setIsVerified] = useState(false)

  const [profileData, setProfileData] = useState({
    name: "Abhinav Singh",
    email: "abhisar@1StopMandi.com",
    phone: "+91 98765 43210",
    role: "hotel",
    address: "123 Business District, patna, Maharashtra 400001",
    businessName: "Singh's Restaurant",
    gstin: "27ABCDE1234F1Z5",
    licenseNumber: "FSSAI-12345678901234",
    joinDate: "2023-01-15",
    lastActive: "2024-01-15 10:30 AM",
    rating: 4.8,
    totalOrders: 156,
    status: "active",
    businessType: "restaurant",
    vehicleType: "bike",
    vehicleNumber: "MH 01 AB 1234",
    drivingLicense: "MH1234567890",
    deliveryZone: "Andheri, Bandra, Juhu",
    language: "english",
    timezone: "ist",
    emailNotifications: true,
    smsNotifications: true,
    orderUpdates: true,
    marketingEmails: true,
  })

  const [editData, setEditData] = useState({ ...profileData })

  // Sync editData with profileData when profileData changes
  useEffect(() => {
    setEditData({ ...profileData })
  }, [profileData])

  const closeDialog = () => {
    setIsDialogOpen(false)
  }

  useEffect(() => {
    if (profileData?.isEmailVerified) {
      setIsVerified(true)
    }
  }, [profileData.isEmailVerified])

  const sendOtp = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/auth/send-otp`, { withCredentials: true })
      console.log("response", response)
      if (response.data.success) {
        setIsDialogOpen(true)
        console.log("OTP sent successfully")
      }
    } catch (err) {
      setVerificationError("Some Error Occurred. Please try again later.")
      console.log(err)
    }
  }

  const verifyOtp = async () => {
    setIsVerifying(true)
    try {
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/auth/verify-otp`, { otp }, { withCredentials: true })
      if (response.data.success) {
        setOtp("")
        setIsVerified(true)
        closeDialog()
        toast.success("Email verified successfully!")
      }
    } catch (error) {
      console.error("Error verifying email:", error)
      setVerificationError("Invalid OTP. Please try again.")
    } finally {
      setIsVerifying(false)
    }
  }

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/auth/profile`)
        const data = response.data.profile
        console.log("Fetched profile data:", data)
        setProfileData(data)
      } catch (error) {
        console.error("Error fetching profile data:", error)
      }
    }
    fetchProfileData()
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setEditData((prev) => ({
      ...prev,
      [name]: value,
    }))
    setHasChanges(true)
  }

  const handleSelectChange = (name, value) => {
    setEditData((prev) => ({
      ...prev,
      [name]: value,
    }))
    setHasChanges(true)
  }

  const handleSwitchChange = (name, checked) => {
    setEditData((prev) => ({
      ...prev,
      [name]: checked,
    }))
    setHasChanges(true)
  }

  const handleSave = () => {
    setProfileData({ ...editData })
    const updateProfile = async () => {
      const response = await axios.put(`${process.env.REACT_APP_BASE_URL}/api/auth/profile`, editData);
      console.log(response.data);
      if (response.data.success) {
        toast.success("Profile Updated Successfully");
        setIsEditing(false)
        setHasChanges(false)
        return;
      }
      toast.error("Some Error Ocuurred");
    }
    updateProfile();
    console.log("Profile saved:", editData)
  }

  const handleCancel = () => {
    setEditData({ ...profileData })
    setIsEditing(false)
    setHasChanges(false)
  }

  const toggleDropdown = (name) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [name]: !prev[name],
    }))
  }

  const selectOption = (field, value, dropdownName) => {
    handleSelectChange(field, value)
    setDropdownOpen((prev) => ({
      ...prev,
      [dropdownName]: false,
    }))
  }

  const getRoleColor = (role) => {
    switch (role) {
      case "admin":
        return "bg-red-50 text-red-600 border-red-200"
      case "hotel":
        return "bg-blue-50 text-blue-600 border-blue-200"
      case "delivery":
        return "bg-green-50 text-green-600 border-green-200"
      default:
        return "bg-gray-50 text-gray-600 border-gray-200"
    }
  }

  const getRoleIcon = (role) => {
    switch (role) {
      case "admin":
        return <Shield className="w-4 h-4" />
      case "hotel":
        return <Building className="w-4 h-4" />
      case "delivery":
        return <Truck className="w-4 h-4" />
      default:
        return <User className="w-4 h-4" />
    }
  }

  const getInitials = (name) => {
    if (!name) return "N/A"
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
  }

  const getDisplayValue = (field, value) => {
    const values = {
      role: { admin: "Admin", hotel: "Hotel/Restaurant", delivery: "Delivery Agent" },
      businessType: {
        restaurant: "Restaurant",
        hotel: "Hotel",
        cafe: "Cafe",
        catering: "Catering Service",
        "cloud-kitchen": "Cloud Kitchen",
      },
      vehicleType: { bike: "Motorcycle", scooter: "Scooter", bicycle: "Bicycle", van: "Van" },
      language: { english: "English", hindi: "Hindi", marathi: "Marathi", gujarati: "Gujarati" },
      timezone: { ist: "IST (UTC+5:30)", utc: "UTC" },
    }
    return values[field]?.[value] || value
  }

  // Custom Components
  const Button = ({ children, onClick, variant = "primary", disabled = false, className = "" }) => {
    const baseClasses =
      "px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
    const variants = {
      primary:
        "bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white disabled:from-gray-300 disabled:to-gray-400 disabled:transform-none disabled:shadow-md",
      secondary:
        "bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-800 disabled:from-gray-50 disabled:to-gray-100 disabled:transform-none",
      success:
        "bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white disabled:from-gray-300 disabled:to-gray-400 disabled:transform-none",
      outline:
        "border-2 border-gray-300 text-gray-700 hover:border-purple-400 hover:bg-gradient-to-r hover:from-purple-50 hover:to-indigo-50 bg-white disabled:bg-gray-50 disabled:transform-none",
    }
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={`${baseClasses} ${variants[variant]} ${className} ${disabled ? "cursor-not-allowed" : "cursor-pointer"}`}
      >
        {children}
      </button>
    )
  }

  const Badge = ({ children, className = "" }) => {
    return (
      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${className}`}>
        {children}
      </span>
    )
  }

  const Avatar = ({ src, alt, size = "w-24 h-24", children }) => {
    return (
      <div
        className={`${size} rounded-full overflow-hidden border-4 border-white shadow-lg bg-slate-600 flex items-center justify-center transition-all duration-200 hover:shadow-xl`}
      >
        {src ? (
          <img src={src || "/placeholder.svg"} alt={alt} className="w-full h-full object-cover" />
        ) : (
          <span className="text-white text-2xl font-semibold">{children}</span>
        )}
      </div>
    )
  }

  const InfoCard = ({ icon: Icon, label, value, className = "" }) => {
    return (
      <div className={`flex items-center space-x-3 p-3 bg-gray-50 rounded-lg border border-gray-100 ${className}`}>
        <div className="p-2 bg-white rounded-lg border border-gray-200">
          <Icon className="w-4 h-4 text-gray-600" />
        </div>
        <div>
          <p className="text-sm text-gray-500 font-medium">{label}</p>
          <p className="font-medium text-gray-900">{value}</p>
        </div>
      </div>
    )
  }

  const StatCard = ({ icon: Icon, value, label, color = "slate" }) => {
    const colors = {
      slate: "bg-slate-600",
      yellow: "bg-yellow-500",
      emerald: "bg-emerald-600",
    }

    return (
      <div className="text-center">
        <div className={`flex items-center justify-center space-x-2 mb-2 p-3 ${colors[color]} rounded-lg shadow-sm`}>
          <Icon className="w-5 h-5 text-white" />
          <span className="text-xl font-semibold text-white">{value}</span>
        </div>
        <p className="text-sm text-gray-500 font-medium">{label}</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-blue-600">Your Profile</h1>
            <div className="flex items-center space-x-3">
              {isEditing && hasChanges && (
                <Button variant="outline" onClick={handleCancel}>
                  <X className="w-4 h-4 mr-2" />
                  Cancel
                </Button>
              )}
              <Button
                variant={isEditing ? "success" : "primary"}
                onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
              >
                {isEditing ? (
                  <>
                    <Check className="w-4 h-4 mr-2" />
                    Save Changes
                  </>
                ) : (
                  <>
                    <Edit className="w-4 h-4 mr-2" />
                    Edit Profile
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Profile Header Card */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-6 lg:space-y-0 lg:space-x-6">
              <div className="relative">
                <Avatar src="/placeholder.svg?height=96&width=96" alt={profileData.name}>
                  {getInitials(profileData.name)}
                </Avatar>
                {isEditing && (
                  <button className="absolute -bottom-1 -right-1 w-8 h-8 bg-slate-600 hover:bg-slate-700 text-white rounded-full flex items-center justify-center shadow-sm transition-colors duration-200">
                    <Camera className="w-4 h-4" />
                  </button>
                )}
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
              </div>

              <div className="flex-1 w-full">
                <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between mb-4">
                  <div className="mb-4 xl:mb-0">
                    <h1 className="text-2xl font-semibold text-gray-900 mb-2">{profileData?.name}</h1>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <Badge className={`${getRoleColor(profileData?.role)} flex items-center space-x-1`}>
                        {getRoleIcon(profileData?.role)}
                        <span className="font-medium">{getDisplayValue("role", profileData?.role)}</span>
                      </Badge>
                      <Badge className="text-green-600 border-green-200 bg-green-50">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        Active
                      </Badge>
                      {profileData.role === "admin" && (<Badge className="text-green-600 border-green-200 bg-green-50">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        {profileData.adminVerificationStatus ? "Verified" : "Not Verified"}
                      </Badge>)}
                    </div>
                  </div>

                  <div className="flex items-center space-x-6">
                    <StatCard icon={Star} value={profileData?.rating} label="Rating" color="yellow" />
                    <StatCard icon={Award} value={profileData?.totalOrders} label="Orders" color="slate" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <InfoCard icon={Mail} label="Email" value={profileData?.email} />
                  <InfoCard icon={Phone} label="Phone" value={profileData?.phone} />
                  <InfoCard
                    icon={Calendar}
                    label="Member Since"
                    value={new Date(profileData?.joined).toLocaleDateString('en-GB')}
                  />
                  <InfoCard
                    icon={MapPin}
                    label="location"
                    value={profileData?.location}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* All Sections */}
          <div className="space-y-6">
            {/* Personal Info */}
            <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border-0 animate-in slide-in-from-right-4 duration-500">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                  <div className="p-2 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-lg mr-3">
                    <User className="w-6 h-6 text-purple-600" />
                  </div>
                  Personal Information
                  <Sparkles className="w-5 h-5 ml-2 text-purple-500 animate-pulse" />
                </h2>
              </div>
              <div className="p-8 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3 group">
                    <label className="text-sm font-semibold text-gray-700 flex items-center">
                      <User className="w-4 h-4 mr-2 text-purple-600" />
                      Full Name
                    </label>
                    <input
                      name="name"
                      value={isEditing ? editData.name : profileData.name}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className={`w-full h-11 px-3 border rounded-lg transition-all duration-200 ${!isEditing
                        ? "bg-gray-50 border-gray-200 text-gray-500"
                        : "bg-white border-gray-300 hover:border-gray-400 focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-100"
                        }`}
                    />
                  </div>

                  {!isEditing && (<div className="space-y-3 group">
                    <label className="text-sm font-semibold text-gray-700 flex items-center">
                      <Shield className="w-4 h-4 mr-2 text-purple-600" />
                      Role
                    </label>
                    <input
                      value={getDisplayValue("role", profileData.role)}
                      disabled
                      className="w-full h-11 px-3 border border-gray-200 rounded-lg bg-gray-50 text-gray-500"
                    />
                  </div>)}
                  {isEditing && (
                    <div className="space-y-3 group">
                      <label className="text-sm font-semibold text-gray-700 flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-purple-600" />
                        Location
                      </label>
                      <input
                        type="location"
                        name="location"
                        value={isEditing ? editData.location : profileData.location}
                        disabled={!isEditing}
                        className={`w-full h-11 px-3 border rounded-lg transition-all duration-200 ${!isEditing
                          ? "bg-gray-50 border-gray-200 text-gray-500"
                          : "bg-white border-gray-300 hover:border-gray-400 focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-100"
                          }`}
                      />
                    </div>)}

                  <div className="space-y-3 group">
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-semibold text-gray-700 flex items-center">
                        <Mail className="w-4 h-4 mr-2 text-purple-600" />
                        Email Address
                      </label>
                      <button
                        onClick={() => { sendOtp(); setIsDialogOpen((p) => !p); }}
                        disabled={isVerified || isVerifying}
                        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${isVerified
                          ? "bg-green-100 text-green-600 cursor-not-allowed"
                          : "bg-blue-100 text-blue-600 hover:bg-blue-200"
                          }`}
                      >
                        {isVerified ? "Verified" : "Not Verified"}
                      </button>
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={isEditing ? editData.email : profileData.email}
                      disabled
                      className={`w-full h-11 px-3 border rounded-lg transition-all duration-200 ${!isEditing
                        ? "bg-gray-50 border-gray-200 text-gray-500"
                        : "bg-white border-gray-300 hover:border-gray-400 focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-100"
                        }`}
                    />
                  </div>

                  {isDialogOpen && (
                    <div
                      className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center"
                      onClick={closeDialog}
                    >
                      <div
                        className="bg-white text-gray-800 rounded-xl shadow-xl p-6 w-full max-w-sm relative"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <button
                          onClick={closeDialog}
                          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
                        >
                          ✖
                        </button>

                        <h2 className="text-lg font-semibold mb-4 text-center">Verify Your Email</h2>

                        <form
                          onSubmit={(e) => {
                            e.preventDefault()
                            verifyOtp()
                          }}
                          className="space-y-4"
                        >
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Enter OTP sent to {profileData?.email}
                            </label>
                            <input
                              type="text"
                              value={otp}
                              onChange={(e) => setOtp(e.target.value)}
                              disabled={isVerifying}
                              required
                              placeholder="Enter OTP Code"
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-900"
                            />
                          </div>
                          {verificationError && <div className="text-red-600 text-sm">{verificationError}</div>}
                          <button
                            type="submit"
                            disabled={isVerifying}
                            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
                          >
                            {isVerifying ? "Verifying..." : "Verify Email"}
                          </button>
                        </form>
                      </div>
                    </div>
                  )}

                  <div className="space-y-3 group">
                    <label className="text-sm font-semibold text-gray-700 flex items-center">
                      <Phone className="w-4 h-4 mr-2 text-purple-600" />
                      Phone Number
                    </label>
                    <input
                      name="phone"
                      value={isEditing ? editData.phone : profileData.phone}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className={`w-full h-11 px-3 border rounded-lg transition-all duration-200 ${!isEditing
                        ? "bg-gray-50 border-gray-200 text-gray-500"
                        : "bg-white border-gray-300 hover:border-gray-400 focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-100"
                        }`}
                    />
                  </div>
                </div>

                <div className="space-y-3 group">
                  <label className="text-sm font-semibold text-gray-700 flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-purple-600" />
                    Address
                  </label>
                  <textarea
                    name="address"
                    value={isEditing ? editData.address : profileData.address}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    rows={4}
                    className={`w-full px-3 py-2.5 border rounded-lg transition-all duration-200 resize-none ${!isEditing
                      ? "bg-gray-50 border-gray-200 text-gray-500"
                      : "bg-white border-gray-300 hover:border-gray-400 focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-100"
                      }`}
                  />
                </div>
              </div>
            </div>

            {/* Business Details */}
            <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border-0 animate-in slide-in-from-right-4 duration-500">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                  <div className="p-2 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg mr-3">
                    <Building className="w-6 h-6 text-blue-600" />
                  </div>
                  Business Information
                  <Sparkles className="w-5 h-5 ml-2 text-blue-500 animate-pulse" />
                </h2>
              </div>
              <div className="p-8 space-y-8">
                {profileData?.role === "hotel" && (<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3 group">
                    <label className="text-sm font-semibold text-gray-700 flex items-center">
                      <Building className="w-4 h-4 mr-2 text-purple-600" />
                      Business Name
                    </label>
                    <input
                      name="businessName"
                      value={isEditing ? editData.businessName : profileData.businessName}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className={`w-full h-11 px-3 border rounded-lg transition-all duration-200 ${!isEditing
                        ? "bg-gray-50 border-gray-200 text-gray-500"
                        : "bg-white border-gray-300 hover:border-gray-400 focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-100"
                        }`}
                    />
                  </div>

                  <div className="space-y-3 group">
                    <label className="text-sm font-semibold text-gray-700 flex items-center">
                      <Award className="w-4 h-4 mr-2 text-purple-600" />
                      Business Type
                    </label>
                    {isEditing ? (
                      <select
                        name="businessType"
                        value={editData.businessType}
                        onChange={handleInputChange}
                        className="w-full h-11 px-3 border border-gray-300 rounded-lg bg-white hover:border-gray-400 focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-100"
                      >
                        <option value="restaurant">Restaurant</option>
                        <option value="hotel">Hotel</option>
                        <option value="cafe">Cafe</option>
                        <option value="catering">Catering Service</option>
                        <option value="cloud-kitchen">Cloud Kitchen</option>
                      </select>
                    ) : (
                      <input
                        value={getDisplayValue("businessType", profileData.businessType)}
                        disabled
                        className="w-full h-11 px-3 border border-gray-200 rounded-lg bg-gray-50 text-gray-500"
                      />
                    )}
                  </div>

                  <div className="space-y-3 group">
                    <label className="text-sm font-semibold text-gray-700">GST Number</label>
                    <input
                      name="gstin"
                      value={isEditing ? editData.gstin : profileData.gstin}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className={`w-full h-11 px-3 border rounded-lg transition-all duration-200 ${!isEditing
                        ? "bg-gray-50 border-gray-200 text-gray-500"
                        : "bg-white border-gray-300 hover:border-gray-400 focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-100"
                        }`}
                    />
                  </div>

                  <div className="space-y-3 group">
                    <label className="text-sm font-semibold text-gray-700">License Number</label>
                    <input
                      name="licenseNumber"
                      value={isEditing ? editData.licenseNumber : profileData.licenseNumber}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className={`w-full h-11 px-3 border rounded-lg transition-all duration-200 ${!isEditing
                        ? "bg-gray-50 border-gray-200 text-gray-500"
                        : "bg-white border-gray-300 hover:border-gray-400 focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-100"
                        }`}
                    />
                  </div>
                </div>)}

                {profileData?.role === "delivery" && (
                  <div className="pt-6 border-t border-gray-200 animate-in slide-in-from-bottom-2">
                    <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                      <div className="p-2 bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg mr-3">
                        <Truck className="w-5 h-5 text-green-600" />
                      </div>
                      Delivery Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3 group">
                        <label className="text-sm font-semibold text-gray-700">Vehicle Type</label>
                        {isEditing ? (
                          <select
                            name="vehicleType"
                            value={editData.vehicleType}
                            onChange={handleInputChange}
                            className="w-full h-11 px-3 border border-gray-300 rounded-lg bg-white hover:border-gray-400 focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-100"
                          >
                            <option value="bike">Motorcycle</option>
                            <option value="scooter">Scooter</option>
                            <option value="bicycle">Bicycle</option>
                            <option value="van">Van</option>
                          </select>
                        ) : (
                          <input
                            value={getDisplayValue("vehicleType", profileData.vehicleType)}
                            disabled
                            className="w-full h-11 px-3 border border-gray-200 rounded-lg bg-gray-50 text-gray-500"
                          />
                        )}
                      </div>

                      <div className="space-y-3 group">
                        <label className="text-sm font-semibold text-gray-700">Vehicle Number</label>
                        <input
                          name="vehicleNumber"
                          value={isEditing ? editData.vehicleNumber : profileData.vehicleNumber}
                          onChange={handleInputChange}
                          disabled={!isEditing}
                          className={`w-full h-11 px-3 border rounded-lg transition-all duration-200 ${!isEditing
                            ? "bg-gray-50 border-gray-200 text-gray-500"
                            : "bg-white border-gray-300 hover:border-gray-400 focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-100"
                            }`}
                        />
                      </div>

                      <div className="space-y-3 group">
                        <label className="text-sm font-semibold text-gray-700">Driving License</label>
                        <input
                          name="drivingLicense"
                          value={isEditing ? editData.drivingLicense : profileData.drivingLicense}
                          onChange={handleInputChange}
                          disabled={!isEditing}
                          className={`w-full h-11 px-3 border rounded-lg transition-all duration-200 ${!isEditing
                            ? "bg-gray-50 border-gray-200 text-gray-500"
                            : "bg-white border-gray-300 hover:border-gray-400 focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-100"
                            }`}
                        />
                      </div>

                      <div className="space-y-3 group">
                        <label className="text-sm font-semibold text-gray-700">Delivery Zone</label>
                        <input
                          name="deliveryZone"
                          value={isEditing ? editData.deliveryZone : profileData.deliveryZone}
                          onChange={handleInputChange}
                          disabled={!isEditing}
                          className={`w-full h-11 px-3 border rounded-lg transition-all duration-200 ${!isEditing
                            ? "bg-gray-50 border-gray-200 text-gray-500"
                            : "bg-white border-gray-300 hover:border-gray-400 focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-100"
                            }`}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Preferences */}
            <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border-0 animate-in slide-in-from-right-4 duration-500">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                  <div className="p-2 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-lg mr-3">
                    <Settings className="w-6 h-6 text-indigo-600" />
                  </div>
                  Account Preferences
                  <Sparkles className="w-5 h-5 ml-2 text-indigo-500 animate-pulse" />
                </h2>
              </div>
              <div className="p-8 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3 group">
                    <label className="text-sm font-semibold text-gray-700 flex items-center">
                      <Globe className="w-4 h-4 mr-2 text-purple-600" />
                      Preferred Language
                    </label>
                    {isEditing ? (
                      <select
                        name="language"
                        value={editData.language}
                        onChange={handleInputChange}
                        className="w-full h-11 px-3 border border-gray-300 rounded-lg bg-white hover:border-gray-400 focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-100"
                      >
                        <option value="english">English</option>
                        <option value="hindi">Hindi</option>
                        <option value="marathi">Marathi</option>
                        <option value="gujarati">Gujarati</option>
                      </select>
                    ) : (
                      <input
                        value={getDisplayValue("language", profileData.language)}
                        disabled
                        className="w-full h-11 px-3 border border-gray-200 rounded-lg bg-gray-50 text-gray-500"
                      />
                    )}
                  </div>

                  <div className="space-y-3 group">
                    <label className="text-sm font-semibold text-gray-700 flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-purple-600" />
                      Timezone
                    </label>
                    {isEditing ? (
                      <select
                        name="timezone"
                        value={editData.timezone}
                        onChange={handleInputChange}
                        className="w-full h-11 px-3 border border-gray-300 rounded-lg bg-white hover:border-gray-400 focus:border-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-100"
                      >
                        <option value="ist">IST (UTC+5:30)</option>
                        <option value="utc">UTC</option>
                      </select>
                    ) : (
                      <input
                        value={getDisplayValue("timezone", profileData.timezone)}
                        disabled
                        className="w-full h-11 px-3 border border-gray-200 rounded-lg bg-gray-50 text-gray-500"
                      />
                    )}
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
                    <div className="p-2 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-lg mr-3">
                      <Bell className="w-5 h-5 text-yellow-600" />
                    </div>
                    Notification Settings
                  </h3>
                  <div className="space-y-4">
                    {[
                      {
                        key: "emailNotifications",
                        label: "Email Notifications",
                        desc: "Receive notifications via email",
                      },
                      {
                        key: "smsNotifications",
                        label: "SMS Notifications",
                        desc: "Receive notifications via SMS",
                      },
                      {
                        key: "orderUpdates",
                        label: "Order Updates",
                        desc: "Get notified about order status changes",
                      },
                      {
                        key: "marketingEmails",
                        label: "Marketing Emails",
                        desc: "Receive promotional offers and updates",
                      },
                    ].map(({ key, label, desc }) => (
                      <div
                        key={key}
                        className="flex items-center justify-between p-5 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300 group"
                      >
                        <div>
                          <label className="text-sm font-semibold text-gray-900 group-hover:text-purple-700 transition-colors duration-300">
                            {label}
                          </label>
                          <p className="text-sm text-gray-500">{desc}</p>
                        </div>
                        <button
                          type="button"
                          onClick={() => (!isEditing ? null : handleSwitchChange(key, !editData[key]))}
                          disabled={!isEditing}
                          className={`relative inline-flex h-7 w-12 items-center rounded-full transition-all duration-300 transform hover:scale-105 ${(isEditing ? editData[key] : profileData[key])
                            ? "bg-gradient-to-r from-purple-500 to-indigo-600 shadow-lg shadow-purple-200"
                            : "bg-gradient-to-r from-purple-500 to-indigo-600 shadow-lg shadow-purple-200"
                            } ${!isEditing ? "opacity-50 cursor-not-allowed hover:scale-100" : "cursor-pointer"}`}
                        >
                          <span
                            className={`inline-block h-5 w-5 transform rounded-full bg-white transition-all duration-300 shadow-lg ${(isEditing ? true : true)
                              ? "translate-x-6 shadow-purple-200"
                              : "translate-x-6 shadow-purple-200"
                              }`}
                          />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
