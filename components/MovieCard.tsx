import { icons } from "@/constants/icons";
import { Link } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface MovieCardProps {
  id: number;
  poster_path: string | null;
  title: string;
  vote_average: number;
  release_date: string;
  genre_ids?: number[];
  overview?: string;
}

const MovieCard = ({
  id,
  poster_path,
  title,
  vote_average,
  release_date,
}: MovieCardProps) => {
  const getRatingColor = (rating: number) => {
    if (rating >= 8) return "#22c55e"; // green
    if (rating >= 6) return "#eab308"; // yellow
    if (rating >= 4) return "#f97316"; // orange
    return "#ef4444"; // red
  };

  const formatRating = (rating: number) => {
    return (rating / 2).toFixed(1);
  };

  return (
    <Link href={`/movies/${id}`} asChild>
      <TouchableOpacity className="w-[30%] mb-4">
        <View className="relative">
          <Image
            source={{
              uri: poster_path
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : "https://via.placeholder.com/600x400/1a1a1a/ffffff.png?text=No+Image",
            }}
            className="w-full h-52 rounded-xl shadow-lg"
            resizeMode="cover"
          />

          {/* Rating Badge */}
          <View
            className="absolute top-2 right-2 px-2 py-1 rounded-full flex-row items-center"
            style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
          >
            <Image
              source={icons.star}
              className="size-3 mr-1"
              tintColor={getRatingColor(vote_average)}
            />
            <Text
              className="text-xs font-bold text-white"
              style={{ color: getRatingColor(vote_average) }}
            >
              {formatRating(vote_average)}
            </Text>
          </View>

          {/* Gradient Overlay at bottom */}
          <View
            className="absolute bottom-0 left-0 right-0 h-20 rounded-b-xl"
            style={{
              backgroundColor: "rgba(0,0,0,0.3)",
            }}
          />
        </View>

        {/* Content */}
        <View className="mt-3 px-1">
          <Text className="text-sm font-bold text-white mb-1" numberOfLines={2}>
            {title}
          </Text>

          <View className="flex-row items-center justify-between mt-1">
            <Text className="text-xs text-gray-400 font-medium">
              {release_date?.split("-")[0] || "TBA"}
            </Text>
            <View className="bg-gray-800 px-2 py-1 rounded-md">
              <Text className="text-xs font-medium text-gray-300 uppercase">
                Movie
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default MovieCard;
