export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Settings</h1>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold mb-6">Store Information</h2>
          <form className="space-y-4">
            <div>
              <label className="block font-medium mb-2 text-sm">
                Store Name
              </label>
              <input
                type="text"
                defaultValue="LUXE Fashion"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-gray-900 focus:outline-none"
              />
            </div>
            <div>
              <label className="block font-medium mb-2 text-sm">Email</label>
              <input
                type="email"
                defaultValue="admin@luxe.com"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-gray-900 focus:outline-none"
              />
            </div>
            <div>
              <label className="block font-medium mb-2 text-sm">Phone</label>
              <input
                type="tel"
                defaultValue="+1 (555) 123-4567"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-gray-900 focus:outline-none"
              />
            </div>
            <button className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-all font-semibold">
              Save Changes
            </button>
          </form>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold mb-6">Notifications</h2>
          <div className="space-y-4">
            {[
              "New order notifications",
              "Low stock alerts",
              "Customer messages",
              "Product reviews",
              "Weekly reports",
            ].map((item, idx) => (
              <label
                key={idx}
                className="flex items-center justify-between cursor-pointer p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <span className="font-medium">{item}</span>
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-5 h-5 rounded"
                />
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
