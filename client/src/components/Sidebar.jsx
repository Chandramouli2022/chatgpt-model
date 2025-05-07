import React from "react";
import { useSidebar } from "../context/SidebarContext";
import "../styles/Style.css";
import SidebarIcon from "../assets/sidebar.png";
import EditIcon from "../assets/edit.png";
import SearchIcon from "../assets/search.png";

const Sidebar = () => {
  const { collapsed, toggleSidebar } = useSidebar();

  const sampleTitles = [
    "Sales Overview", "User Growth", "Revenue Breakdown", "Market Trends",
    "Customer Churn", "Traffic Sources", "Product Performance", "Campaign ROI",
    "Monthly Report", "Daily Active Users", "Lead Conversion Rate",
    "Support Ticket Volume", "Retention by Cohort", "New vs Returning Users",
    "Subscription Trends", "Profit Margins", "Time on Site", "Bounce Rate Analysis",
    "Device Usage Split", "Geographic Distribution", "Cost per Acquisition",
    "Inventory Levels", "Weekly Sales Trend", "Top Performing Pages",
    "Email Open Rates", "Revenue by Region", "Funnel Conversion",
    "Customer Satisfaction", "Net Promoter Score", "Ad Spend Efficiency"
  ];

  const chartTitles = [...sampleTitles].sort(() => 0.5 - Math.random()).slice(0, 20);

  return (
    <div className={`sidebar-container ${collapsed ? "collapsed" : ""}`}>
      <div className='sidebar-nav'>
        <div className='icons-left'>
          <button className="icon-button" onClick={toggleSidebar}>
            <img src={SidebarIcon} alt="Sidebar" className="icon" />
          </button>
        </div>

        <div className='icons-right'>
          <button className="icon-button">
            <img src={EditIcon} alt="Edit" className="icon" />
          </button>
          <button className="icon-button">
            <img src={SearchIcon} alt="Search" className="icon" />
          </button>
        </div>
      </div>

      <div className='sb-chart-titles'>
        {chartTitles.map((title, index) => (
          <div key={index} className={`sb-chart-title ${index==0 ? "selected" : ""}`}>
            {title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
