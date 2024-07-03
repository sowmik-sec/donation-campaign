import { Cell, Legend, Pie, PieChart, Text, Tooltip } from "recharts";
import { getLocalStorageData } from "../../utilities/localStorage";

function Statistics() {
  const donations = getLocalStorageData();
  const singleTypesOfDonation = [];
  donations.forEach((donation) => {
    if (!singleTypesOfDonation.some((don) => don.id === donation.id)) {
      singleTypesOfDonation.push(donation);
    }
  });
  const data = [
    {
      name: "Your Donation",
      value: singleTypesOfDonation.length,
    },
    {
      name: "Total Donation",
      value: 12,
    },
  ];
  const COLORS = ["#FF6384", "#36A2EB"];
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <Text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </Text>
    );
  };

  return (
    <div className="flex items-center justify-center">
      <div>
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx={200}
            cy={200}
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
}

export default Statistics;
