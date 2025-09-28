"use client";

import { CheckCircle2, MapPin, DollarSign, ShieldCheck, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { JSX } from "react";

type ProblemSolution = {
  title: string;
  problem: string;
  solution: string;
  icon: JSX.Element;
};

const Solutions = () => {
  const items: ProblemSolution[] = [
    {
      title: "Market Location Problem",
      problem: "Farmers struggle to find reliable markets for their produce.",
      solution: "AgroBridge connects farmers directly with verified buyers and digital marketplaces.",
      icon: <MapPin className="h-10 w-10 text-green-600" />,
    },
    {
      title: "Pricing Problem",
      problem: "Unfair middlemen pricing reduces farmer income.",
      solution: "Our platform ensures transparent, real-time pricing data for fair deals.",
      icon: <DollarSign className="h-10 w-10 text-green-600" />,
    },
    {
      title: "Trusted Brokers Problem",
      problem: "Dependence on unverified brokers creates trust issues.",
      solution: "AgroBridge acts as a trusted intermediary with verified profiles.",
      icon: <ShieldCheck className="h-10 w-10 text-green-600" />,
    },
    {
      title: "Transparency of Process",
      problem: "Lack of clarity in transactions and delivery tracking.",
      solution: "We provide complete process transparency with digital records and updates.",
      icon: <Eye className="h-10 w-10 text-green-600" />,
    },
  ];

  return (
    <section className="py-20 bg-gray-50" id="solutions">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-extrabold text-center text-gray-900"
        >
          Challenges We Solve
        </motion.h2>
        <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
          AgroBridge addresses the key pain points in agriculture with simple and effective solutions.
        </p>

        {/* Cards */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full bg-green-100">{item.icon}</div>
                <h3 className="ml-4 text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-2">
                <span className="font-semibold">Problem: </span>
                {item.problem}
              </p>
              <p className="text-gray-700">
                <CheckCircle2 className="inline h-5 w-5 text-green-600 mr-2" />
                <span className="font-semibold">Solution: </span>
                {item.solution}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
